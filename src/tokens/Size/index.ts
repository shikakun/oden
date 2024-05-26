import * as tokens from '@shikakun/dashi';

type SizeType = {
  avatar: {
    xs: string;
    s: string;
    m: string;
    l: string;
  };
  border: {
    m: string;
    l: string;
    xl: string;
  };
  interactiveComponent: {
    xs: string;
    s: string;
    m: string;
    l: string;
  };
  outline: {
    offset: string;
    size: string;
  };
  radius: {
    m: string;
    l: string;
    xl: string;
    full: string;
  };
  scale: {
    1: string;
    2: string;
    4: string;
    8: string;
    12: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    40: string;
    48: string;
    56: string;
    64: string;
    72: string;
    80: string;
    96: string;
    112: string;
    120: string;
    128: string;
    144: string;
    160: string;
    168: string;
    176: string;
    192: string;
    216: string;
    240: string;
    256: string;
    264: string;
    288: string;
    312: string;
    9999: string;
  };
  spacing: {
    '2xs': string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    '2xl': string;
  };
};

export const Size: SizeType = {
  avatar: {
    xs: tokens.SizeAvatarXs,
    s: tokens.SizeAvatarS,
    m: tokens.SizeAvatarM,
    l: tokens.SizeAvatarL,
  },
  border: {
    m: tokens.SizeBorderM,
    l: tokens.SizeBorderL,
    xl: tokens.SizeBorderXl,
  },
  interactiveComponent: {
    xs: tokens.SizeInteractiveComponentXs,
    s: tokens.SizeInteractiveComponentS,
    m: tokens.SizeInteractiveComponentM,
    l: tokens.SizeInteractiveComponentL,
  },
  outline: {
    offset: tokens.SizeOutlineOffset,
    size: tokens.SizeOutlineSize,
  },
  radius: {
    m: tokens.SizeRadiusM,
    l: tokens.SizeRadiusL,
    xl: tokens.SizeRadiusXl,
    full: tokens.SizeRadiusFull,
  },
  scale: {
    1: tokens.SizeScale1,
    2: tokens.SizeScale2,
    4: tokens.SizeScale4,
    8: tokens.SizeScale8,
    12: tokens.SizeScale12,
    16: tokens.SizeScale16,
    20: tokens.SizeScale20,
    24: tokens.SizeScale24,
    28: tokens.SizeScale28,
    32: tokens.SizeScale32,
    40: tokens.SizeScale40,
    48: tokens.SizeScale48,
    56: tokens.SizeScale56,
    64: tokens.SizeScale64,
    72: tokens.SizeScale72,
    80: tokens.SizeScale80,
    96: tokens.SizeScale96,
    112: tokens.SizeScale112,
    120: tokens.SizeScale120,
    128: tokens.SizeScale128,
    144: tokens.SizeScale144,
    160: tokens.SizeScale160,
    168: tokens.SizeScale168,
    176: tokens.SizeScale176,
    192: tokens.SizeScale192,
    216: tokens.SizeScale216,
    240: tokens.SizeScale240,
    256: tokens.SizeScale256,
    264: tokens.SizeScale264,
    288: tokens.SizeScale288,
    312: tokens.SizeScale312,
    9999: tokens.SizeScale9999,
  },
  spacing: {
    '2xs': tokens.SizeSpacing2xs,
    xs: tokens.SizeSpacingXs,
    s: tokens.SizeSpacingS,
    m: tokens.SizeSpacingM,
    l: tokens.SizeSpacingL,
    xl: tokens.SizeSpacingXl,
    '2xl': tokens.SizeSpacing2xl,
  },
};
