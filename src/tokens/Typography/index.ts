import * as tokens from '@shikakun/dashi';

type TypographyType = {
  fontFamily: {
    sansSerif: string;
    monospace: string;
  };
  fontSize: {
    '2xs': string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  lineHeight: {
    '2xs': {
      dense: string;
      normal: string;
      comfort: string;
    };
    xs: {
      dense: string;
      normal: string;
      comfort: string;
    };
    s: {
      dense: string;
      normal: string;
      comfort: string;
    };
    m: {
      dense: string;
      normal: string;
      comfort: string;
    };
    l: {
      dense: string;
      normal: string;
      comfort: string;
    };
    xl: {
      dense: string;
      normal: string;
      comfort: string;
    };
    '2xl': {
      dense: string;
      normal: string;
      comfort: string;
    };
    '3xl': {
      dense: string;
      normal: string;
      comfort: string;
    };
  };
};

export const Typography: TypographyType = {
  fontFamily: {
    sansSerif: tokens.TypographyFontFamilySansSerif,
    monospace: tokens.TypographyFontFamilyMonospace,
  },
  fontSize: {
    '2xs': tokens.TypographyFontSize2xs,
    xs: tokens.TypographyFontSizeXs,
    s: tokens.TypographyFontSizeS,
    m: tokens.TypographyFontSizeM,
    l: tokens.TypographyFontSizeL,
    xl: tokens.TypographyFontSizeXl,
    '2xl': tokens.TypographyFontSize2xl,
    '3xl': tokens.TypographyFontSize3xl,
  },
  lineHeight: {
    '2xs': {
      dense: tokens.TypographyLineHeight2xsDense,
      normal: tokens.TypographyLineHeight2xsNormal,
      comfort: tokens.TypographyLineHeight2xsComfort,
    },
    xs: {
      dense: tokens.TypographyLineHeightXsDense,
      normal: tokens.TypographyLineHeightXsNormal,
      comfort: tokens.TypographyLineHeightXsComfort,
    },
    s: {
      dense: tokens.TypographyLineHeightSDense,
      normal: tokens.TypographyLineHeightSNormal,
      comfort: tokens.TypographyLineHeightSComfort,
    },
    m: {
      dense: tokens.TypographyLineHeightMDense,
      normal: tokens.TypographyLineHeightMNormal,
      comfort: tokens.TypographyLineHeightMComfort,
    },
    l: {
      dense: tokens.TypographyLineHeightLDense,
      normal: tokens.TypographyLineHeightLNormal,
      comfort: tokens.TypographyLineHeightLComfort,
    },
    xl: {
      dense: tokens.TypographyLineHeightXlDense,
      normal: tokens.TypographyLineHeightXlNormal,
      comfort: tokens.TypographyLineHeightXlComfort,
    },
    '2xl': {
      dense: tokens.TypographyLineHeight2xlDense,
      normal: tokens.TypographyLineHeight2xlNormal,
      comfort: tokens.TypographyLineHeight2xlComfort,
    },
    '3xl': {
      dense: tokens.TypographyLineHeight3xlDense,
      normal: tokens.TypographyLineHeight3xlNormal,
      comfort: tokens.TypographyLineHeight3xlComfort,
    },
  },
};
