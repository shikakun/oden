import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../../../packages/react/**/*.mdx',
    '../../../packages/react/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), vanillaExtractPlugin()];
    return config;
  },
};
export default config;
