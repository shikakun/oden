import { Color, Size, Typography } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';
import { initialize } from '../../styles/mixins.css';

const RADIUS_SIZE = '0';
const PADDING_BLOCK_SIZE = Size.spacing['xs'];
const PADDING_INLINE_SIZE = Size.spacing['s'];
const BORDER_SIZE = Size.border.l;
const BORDER_COLOR = Color.border.default.light;

export const root = style([
  initialize('input'),
  {
    boxSizing: 'border-box',
    height: Size.interactiveComponent.m,
    maxWidth: '100%',
    paddingInline: PADDING_INLINE_SIZE,
    color: Color.text.default.light,
    fontFamily: Typography.fontFamily.default,
    fontWeight: Typography.fontWeight.default,
    fontSize: Typography.fontSize.m,
    lineHeight: Typography.lineHeight.m.default,
    backgroundColor: Color.background.field.enabled.light,
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR}`,
    borderRadius: RADIUS_SIZE,
    ':disabled': {
      backgroundColor: Color.background.field.disabled.light,
      boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${Color.border.muted.light}`,
    },
  },
]);

export const error = style({
  color: Color.semantic.negative[800],
  backgroundColor: Color.semantic.negative[50],
  boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${Color.semantic.negative[400]}`,
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
