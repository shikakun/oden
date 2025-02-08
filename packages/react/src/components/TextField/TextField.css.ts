import { Color, Size, Typography } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';
import { initialize } from '../../styles/mixins.css';

const RADIUS_SIZE = '0';
const PADDING_BLOCK_SIZE = Size.spacing['xs'];
const PADDING_INLINE_SIZE = Size.spacing['s'];
const BORDER_SIZE = Size.border.l;
const BORDER_COLOR = {
  enabled: {
    light: Color.semantic.neutral[300],
    dark: Color.semantic.neutral[500],
  },
  disabled: {
    light: Color.semantic.neutral[200],
    dark: Color.semantic.neutral[600],
  },
};

export const root = style([
  initialize('input'),
  {
    boxSizing: 'border-box',
    height: Size.interactiveComponent.m,
    maxWidth: '100%',
    paddingInline: PADDING_INLINE_SIZE,
    fontFamily: Typography.fontFamily.default,
    fontWeight: Typography.fontWeight.default,
    fontSize: Typography.fontSize.m,
    lineHeight: Typography.lineHeight.m.default,
    borderRadius: RADIUS_SIZE,
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
]);

export const rootColor = styleVariants({
  light: {
    color: Color.text.default.light,
    backgroundColor: Color.background.field.enabled.light,
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR.enabled.light}`,
    ':disabled': {
      backgroundColor: Color.background.field.disabled.light,
      boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR.disabled.light}`,
    },
  },
  dark: {
    color: Color.text.default.dark,
    backgroundColor: Color.background.field.enabled.dark,
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR.enabled.dark}`,
    ':disabled': {
      backgroundColor: Color.background.field.disabled.dark,
      boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR.disabled.dark}`,
    },
  },
});

export const error = styleVariants({
  light: {
    color: Color.semantic.negative[800],
    backgroundColor: Color.semantic.negative[50],
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${Color.semantic.negative[400]}`,
  },
  dark: {
    color: Color.semantic.negative[100],
    backgroundColor: Color.semantic.negative[950],
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${Color.semantic.negative[500]}`,
  },
});

export const isMultiLine = style({
  height: 'auto',
  paddingBlock: PADDING_BLOCK_SIZE,
});

export const widthAuto = style({
  width: 'auto',
  minWidth: '20rem',
});

export const widthFull = style({
  width: '100%',
});

export const widthHalf = style({
  width: '50%',
});

export const widthThird = style({
  width: '33.333%',
});
