import { Color, Size, Typography } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';
import { ellipsis, interactiveOverlay } from '../../styles/mixins.css';

const RADIUS_SIZE = '0';
const LABEL_PADDING_INLINE_SIZE_S = Size.spacing.s;
const LABEL_PADDING_INLINE_SIZE_M = Size.spacing.m;
const BORDER_SIZE = Size.border.l;
const LABEL_COLOR = {
  text: {
    default: {
      light: Color.semantic.neutral[800],
      dark: Color.semantic.neutral[100],
    },
    muted: {
      light: Color.semantic.neutral[600],
      dark: Color.semantic.neutral[300],
    },
    interactive: {
      light: Color.semantic.interactive[800],
      dark: Color.semantic.interactive[200],
    },
    negative: {
      light: Color.semantic.negative[800],
      dark: Color.semantic.negative[200],
    },
  },
  outlined: {
    default: {
      light: Color.semantic.neutral[800],
      dark: Color.semantic.neutral[100],
    },
    muted: {
      light: Color.semantic.neutral[600],
      dark: Color.semantic.neutral[300],
    },
    interactive: {
      light: Color.semantic.interactive[800],
      dark: Color.semantic.interactive[200],
    },
    negative: {
      light: Color.semantic.negative[800],
      dark: Color.semantic.negative[200],
    },
  },
  tinted: {
    default: {
      light: Color.semantic.neutral[900],
      dark: Color.semantic.neutral[0],
    },
    muted: {
      light: Color.semantic.neutral[700],
      dark: Color.semantic.neutral[200],
    },
    interactive: {
      light: Color.semantic.interactive[900],
      dark: Color.semantic.interactive[100],
    },
    negative: {
      light: Color.semantic.negative[900],
      dark: Color.semantic.negative[100],
    },
  },
  filled: {
    default: {
      light: Color.semantic.neutral[0],
      dark: Color.semantic.neutral[800],
    },
    muted: {
      light: Color.semantic.neutral[0],
      dark: Color.semantic.neutral[600],
    },
    interactive: {
      light: Color.semantic.interactive[0],
      dark: Color.semantic.interactive[800],
    },
    negative: {
      light: Color.semantic.negative[0],
      dark: Color.semantic.negative[800],
    },
  },
};
const BACKGROUND_COLOR = {
  text: 'transparent',
  outlined: {
    light: Color.background.page.light,
    dark: Color.background.page.dark,
  },
  tinted: {
    default: {
      light: Color.semantic.neutral[100],
      dark: Color.semantic.neutral[700],
    },
    muted: {
      light: Color.semantic.neutral[100],
      dark: Color.semantic.neutral[700],
    },
    interactive: {
      light: Color.semantic.interactive[100],
      dark: Color.semantic.interactive[900],
    },
    negative: {
      light: Color.semantic.negative[100],
      dark: Color.semantic.negative[900],
    },
  },
  filled: {
    default: {
      light: Color.semantic.neutral[700],
      dark: Color.semantic.neutral[0],
    },
    muted: {
      light: Color.semantic.neutral[500],
      dark: Color.semantic.neutral[0],
    },
    interactive: {
      light: Color.semantic.interactive[700],
      dark: Color.semantic.interactive[0],
    },
    negative: {
      light: Color.semantic.negative[700],
      dark: Color.semantic.negative[0],
    },
  },
};
const BORDER_COLOR = {
  light: Color.semantic.neutral[300],
  dark: Color.semantic.neutral[500],
};

export const root = style({
  background: 'unset',
  border: 'unset',
  textDecoration: 'unset',
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  maxWidth: '100%',
  fontFamily: Typography.fontFamily.default,
  fontWeight: Typography.fontWeight.default,
  fontSize: Typography.fontSize.m,
  lineHeight: Typography.lineHeight.m.dense,
  cursor: 'pointer',
});

export const rootOverlay = styleVariants({
  light: [interactiveOverlay['light']],
  dark: [interactiveOverlay['dark']],
});

export const appearanceText = style({
  backgroundColor: 'transparent',
});

export const appearanceTextDefault = styleVariants({
  light: { color: LABEL_COLOR.text.default.light },
  dark: { color: LABEL_COLOR.text.default.dark },
});

export const appearanceTextMuted = styleVariants({
  light: { color: LABEL_COLOR.text.muted.light },
  dark: { color: LABEL_COLOR.text.muted.dark },
});

export const appearanceTextInteractive = styleVariants({
  light: { color: LABEL_COLOR.text.interactive.light },
  dark: { color: LABEL_COLOR.text.interactive.dark },
});

export const appearanceTextNegative = styleVariants({
  light: { color: LABEL_COLOR.text.negative.light },
  dark: { color: LABEL_COLOR.text.negative.dark },
});

export const appearanceOutlined = styleVariants({
  light: {
    backgroundColor: BACKGROUND_COLOR.outlined.light,
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR.light}`,
  },
  dark: {
    backgroundColor: BACKGROUND_COLOR.outlined.dark,
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR.dark}`,
  },
});

export const appearanceOutlinedDefault = styleVariants({
  light: {
    color: LABEL_COLOR.outlined.default.light,
  },
  dark: {
    color: LABEL_COLOR.outlined.default.dark,
  },
});

export const appearanceOutlinedMuted = styleVariants({
  light: {
    color: LABEL_COLOR.outlined.muted.light,
  },
  dark: {
    color: LABEL_COLOR.outlined.muted.dark,
  },
});

export const appearanceOutlinedInteractive = styleVariants({
  light: {
    color: LABEL_COLOR.outlined.interactive.light,
  },
  dark: {
    color: LABEL_COLOR.outlined.interactive.dark,
  },
});

export const appearanceOutlinedNegative = styleVariants({
  light: {
    color: LABEL_COLOR.outlined.negative.light,
  },
  dark: {
    color: LABEL_COLOR.outlined.negative.dark,
  },
});

export const appearanceTintedDefault = styleVariants({
  light: {
    color: LABEL_COLOR.tinted.default.light,
    backgroundColor: BACKGROUND_COLOR.tinted.default.light,
  },
  dark: {
    color: LABEL_COLOR.tinted.default.dark,
    backgroundColor: BACKGROUND_COLOR.tinted.default.dark,
  },
});

export const appearanceTintedMuted = styleVariants({
  light: {
    color: LABEL_COLOR.tinted.muted.light,
    backgroundColor: BACKGROUND_COLOR.tinted.muted.light,
  },
  dark: {
    color: LABEL_COLOR.tinted.muted.dark,
    backgroundColor: BACKGROUND_COLOR.tinted.muted.dark,
  },
});

export const appearanceTintedInteractive = styleVariants({
  light: {
    color: LABEL_COLOR.tinted.interactive.light,
    backgroundColor: BACKGROUND_COLOR.tinted.interactive.light,
  },
  dark: {
    color: LABEL_COLOR.tinted.interactive.dark,
    backgroundColor: BACKGROUND_COLOR.tinted.interactive.dark,
  },
});

export const appearanceTintedNegative = styleVariants({
  light: {
    color: LABEL_COLOR.tinted.negative.light,
    backgroundColor: BACKGROUND_COLOR.tinted.negative.light,
  },
  dark: {
    color: LABEL_COLOR.tinted.negative.dark,
    backgroundColor: BACKGROUND_COLOR.tinted.negative.dark,
  },
});

export const appearanceFilledDefault = styleVariants({
  light: {
    color: LABEL_COLOR.filled.default.light,
    backgroundColor: BACKGROUND_COLOR.filled.default.light,
  },
  dark: {
    color: LABEL_COLOR.filled.default.dark,
    backgroundColor: BACKGROUND_COLOR.filled.default.dark,
  },
});

export const appearanceFilledMuted = styleVariants({
  light: {
    color: LABEL_COLOR.filled.muted.light,
    backgroundColor: BACKGROUND_COLOR.filled.muted.light,
  },
  dark: {
    color: LABEL_COLOR.filled.muted.dark,
    backgroundColor: BACKGROUND_COLOR.filled.muted.dark,
  },
});

export const appearanceFilledInteractive = styleVariants({
  light: {
    color: LABEL_COLOR.filled.interactive.light,
    backgroundColor: BACKGROUND_COLOR.filled.interactive.light,
  },
  dark: {
    color: LABEL_COLOR.filled.interactive.dark,
    backgroundColor: BACKGROUND_COLOR.filled.interactive.dark,
  },
});

export const appearanceFilledNegative = styleVariants({
  light: {
    color: LABEL_COLOR.filled.negative.light,
    backgroundColor: BACKGROUND_COLOR.filled.negative.light,
  },
  dark: {
    color: LABEL_COLOR.filled.negative.dark,
    backgroundColor: BACKGROUND_COLOR.filled.negative.dark,
  },
});

export const shape = styleVariants({
  square: { borderRadius: RADIUS_SIZE },
  circle: { borderRadius: Size.radius.full },
});

export const size = styleVariants({
  s: {
    minHeight: Size.interactiveComponent.s,
    padding: `0 ${LABEL_PADDING_INLINE_SIZE_S}`,
  },
  m: {
    minHeight: Size.interactiveComponent.m,
    padding: `0 ${LABEL_PADDING_INLINE_SIZE_M}`,
  },
});

export const width = styleVariants({
  auto: { width: 'auto' },
  full: { width: '100%' },
  half: { width: '50%' },
  third: { width: '33.333%' },
});

export const layoutCenter = style({
  justifyContent: 'center',
});

export const hasLeadingIcon = style({
  paddingInlineStart: 0,
});

export const hasTrailingIcon = style({
  paddingInlineEnd: 0,
});

export const iconOnly = style({
  paddingInline: 0,
});

export const disabled = style({
  cursor: 'not-allowed',
  opacity: '0.5',
});

export const body = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
});

export const bodyLayout = styleVariants({
  center: { justifyContent: 'center' },
  start: { justifyContent: 'flex-start' },
  'space-between': { flex: '1', minWidth: '0' },
});

export const label = style([
  ellipsis,
  {
    maxWidth: '100%',
    display: 'block',
    wordBreak: 'break-all',
  },
]);

export const media = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.25em',
});

export const mediaSize = styleVariants({
  s: {
    minWidth: Size.interactiveComponent.s,
    minHeight: Size.interactiveComponent.s,
  },
  m: {
    minWidth: Size.interactiveComponent.m,
    minHeight: Size.interactiveComponent.m,
  },
});
