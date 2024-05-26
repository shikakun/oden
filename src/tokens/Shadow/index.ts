import * as tokens from '@shikakun/dashi';

type ShadowThemeType = {
  light: string;
  dark: string;
};

type ShadowType = {
  css: {
    1: ShadowThemeType;
    2: ShadowThemeType;
    3: ShadowThemeType;
    4: ShadowThemeType;
  };
};

export const Shadow: ShadowType = {
  css: {
    1: {
      light: tokens.ShadowCss1Light,
      dark: tokens.ShadowCss1Dark,
    },
    2: {
      light: tokens.ShadowCss2Light,
      dark: tokens.ShadowCss2Dark,
    },
    3: {
      light: tokens.ShadowCss3Light,
      dark: tokens.ShadowCss3Dark,
    },
    4: {
      light: tokens.ShadowCss4Light,
      dark: tokens.ShadowCss4Dark,
    },
  },
};
