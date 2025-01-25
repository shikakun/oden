import StyleDictionary from 'style-dictionary';
import { fileHeader } from 'style-dictionary/utils';
import yaml from 'yaml';

const sourcePath = ['src/**/*.yaml'];
const buildPath = 'dist/';
const buildFileName = 'tokens';
const options = {
  showFileHeader: false,
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const convertTokenToNestedValue = (token) => {
  if ('value' in token) return token.value;

  return Object.fromEntries(
    Object.entries(token).map(([key, value]) => [
      key,
      convertTokenToNestedValue(value),
    ])
  );
};

const convertTokenToTypeDefinition = (token) => {
  if ('value' in token) return typeof token.value;

  return Object.fromEntries(
    Object.entries(token).map(([key, value]) => [
      key,
      convertTokenToTypeDefinition(value),
    ])
  );
};

StyleDictionary.registerFormat({
  name: 'javascript/esm',
  format: async ({ dictionary, file, platform = {} }) => {
    const header = await fileHeader({ file });
    const { prefix } = platform;
    const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;

    const categorizedTokens = Object.entries(tokens).reduce(
      (acc, [category, values]) => {
        acc[category] = values;
        return acc;
      },
      {}
    );

    const exportStrings = Object.entries(categorizedTokens).map(
      ([category, token]) => {
        return `export const ${capitalizeFirstLetter(
          category
        )} = ${JSON.stringify(convertTokenToNestedValue(token), null, 2)};\n`;
      }
    );

    return header + exportStrings.join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'typescript/esm-declarations',
  format: async ({ dictionary, file, platform = {} }) => {
    const header = await fileHeader({ file });
    const { prefix } = platform;
    const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;

    const categorizedTokens = Object.entries(tokens).reduce(
      (acc, [category, values]) => {
        acc[category] = values;
        return acc;
      },
      {}
    );

    const exportStrings = Object.entries(categorizedTokens).map(
      ([category, token]) => {
        return `export const ${capitalizeFirstLetter(
          category
        )}: ${JSON.stringify(convertTokenToTypeDefinition(token), null, 2)};\n`;
      }
    );

    return header + exportStrings.join('\n').replace(/:\s"(\w+)"/g, ': $1');
  },
});

export default {
  hooks: {
    parsers: {
      'yaml-parser': {
        pattern: /\.yaml$/,
        parser: ({ contents }) => yaml.parse(contents),
      },
    },
  },
  parsers: ['yaml-parser'],
  source: sourcePath,
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: buildPath,
      files: [
        {
          format: 'javascript/esm',
          destination: `${buildFileName}.js`,
        },
        {
          format: 'typescript/esm-declarations',
          destination: `${buildFileName}.d.ts`,
        },
      ],
      options,
    },
    css: {
      transformGroup: 'css',
      buildPath: buildPath,
      files: [
        {
          destination: `${buildFileName}.css`,
          format: 'css/variables',
        },
      ],
      options,
    },
  },
};
