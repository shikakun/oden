import * as tokens from '@shikakun/dashi';

type ShadeType =
  | 0
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000;
type ColorShadeType = Record<ShadeType, string>;

type TextColorType = {
  light: string;
  dark: string;
};

type ColorType = {
  black: string;
  white: string;
  gray: ColorShadeType;
  blue: ColorShadeType;
  green: ColorShadeType;
  red: ColorShadeType;
  neutral: ColorShadeType;
  primary: ColorShadeType;
  positive: ColorShadeType;
  negative: ColorShadeType;
  interactive: ColorShadeType;
  text: {
    primary: TextColorType;
    secondary: TextColorType;
    tertiary: TextColorType;
    link: TextColorType;
  };
};

export const Color: ColorType = {
  black: tokens.ColorBlack,
  white: tokens.ColorWhite,
  gray: {
    0: tokens.ColorGray0,
    50: tokens.ColorGray50,
    100: tokens.ColorGray100,
    200: tokens.ColorGray200,
    300: tokens.ColorGray300,
    400: tokens.ColorGray400,
    500: tokens.ColorGray500,
    600: tokens.ColorGray600,
    700: tokens.ColorGray700,
    800: tokens.ColorGray800,
    900: tokens.ColorGray900,
    1000: tokens.ColorGray1000,
  },
  blue: {
    0: tokens.ColorBlue0,
    50: tokens.ColorBlue50,
    100: tokens.ColorBlue100,
    200: tokens.ColorBlue200,
    300: tokens.ColorBlue300,
    400: tokens.ColorBlue400,
    500: tokens.ColorBlue500,
    600: tokens.ColorBlue600,
    700: tokens.ColorBlue700,
    800: tokens.ColorBlue800,
    900: tokens.ColorBlue900,
    1000: tokens.ColorBlue1000,
  },
  green: {
    0: tokens.ColorGreen0,
    50: tokens.ColorGreen50,
    100: tokens.ColorGreen100,
    200: tokens.ColorGreen200,
    300: tokens.ColorGreen300,
    400: tokens.ColorGreen400,
    500: tokens.ColorGreen500,
    600: tokens.ColorGreen600,
    700: tokens.ColorGreen700,
    800: tokens.ColorGreen800,
    900: tokens.ColorGreen900,
    1000: tokens.ColorGreen1000,
  },
  red: {
    0: tokens.ColorRed0,
    50: tokens.ColorRed50,
    100: tokens.ColorRed100,
    200: tokens.ColorRed200,
    300: tokens.ColorRed300,
    400: tokens.ColorRed400,
    500: tokens.ColorRed500,
    600: tokens.ColorRed600,
    700: tokens.ColorRed700,
    800: tokens.ColorRed800,
    900: tokens.ColorRed900,
    1000: tokens.ColorRed1000,
  },
  neutral: {
    0: tokens.ColorNeutral0,
    50: tokens.ColorNeutral50,
    100: tokens.ColorNeutral100,
    200: tokens.ColorNeutral200,
    300: tokens.ColorNeutral300,
    400: tokens.ColorNeutral400,
    500: tokens.ColorNeutral500,
    600: tokens.ColorNeutral600,
    700: tokens.ColorNeutral700,
    800: tokens.ColorNeutral800,
    900: tokens.ColorNeutral900,
    1000: tokens.ColorNeutral1000,
  },
  primary: {
    0: tokens.ColorPrimary0,
    50: tokens.ColorPrimary50,
    100: tokens.ColorPrimary100,
    200: tokens.ColorPrimary200,
    300: tokens.ColorPrimary300,
    400: tokens.ColorPrimary400,
    500: tokens.ColorPrimary500,
    600: tokens.ColorPrimary600,
    700: tokens.ColorPrimary700,
    800: tokens.ColorPrimary800,
    900: tokens.ColorPrimary900,
    1000: tokens.ColorPrimary1000,
  },
  positive: {
    0: tokens.ColorPositive0,
    50: tokens.ColorPositive50,
    100: tokens.ColorPositive100,
    200: tokens.ColorPositive200,
    300: tokens.ColorPositive300,
    400: tokens.ColorPositive400,
    500: tokens.ColorPositive500,
    600: tokens.ColorPositive600,
    700: tokens.ColorPositive700,
    800: tokens.ColorPositive800,
    900: tokens.ColorPositive900,
    1000: tokens.ColorPositive1000,
  },
  negative: {
    0: tokens.ColorNegative0,
    50: tokens.ColorNegative50,
    100: tokens.ColorNegative100,
    200: tokens.ColorNegative200,
    300: tokens.ColorNegative300,
    400: tokens.ColorNegative400,
    500: tokens.ColorNegative500,
    600: tokens.ColorNegative600,
    700: tokens.ColorNegative700,
    800: tokens.ColorNegative800,
    900: tokens.ColorNegative900,
    1000: tokens.ColorNegative1000,
  },
  interactive: {
    0: tokens.ColorInteractive0,
    50: tokens.ColorInteractive50,
    100: tokens.ColorInteractive100,
    200: tokens.ColorInteractive200,
    300: tokens.ColorInteractive300,
    400: tokens.ColorInteractive400,
    500: tokens.ColorInteractive500,
    600: tokens.ColorInteractive600,
    700: tokens.ColorInteractive700,
    800: tokens.ColorInteractive800,
    900: tokens.ColorInteractive900,
    1000: tokens.ColorInteractive1000,
  },
  text: {
    primary: {
      light: tokens.ColorTextPrimaryLight,
      dark: tokens.ColorTextPrimaryDark,
    },
    secondary: {
      light: tokens.ColorTextSecondaryLight,
      dark: tokens.ColorTextSecondaryDark,
    },
    tertiary: {
      light: tokens.ColorTextTertiaryLight,
      dark: tokens.ColorTextTertiaryDark,
    },
    link: {
      light: tokens.ColorTextLinkLight,
      dark: tokens.ColorTextLinkDark,
    },
  },
};
