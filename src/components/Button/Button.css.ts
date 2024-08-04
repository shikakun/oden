import { Color, Size, Typography } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';
import { interactiveOverlay } from '../../styles/mixins.css';

const unset = style({
  background: 'unset',
  border: 'unset',
});

export const root = style([
  unset,
  interactiveOverlay,
  {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'inline-flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Typography.fontFamily.sansSerif,
    cursor: 'pointer',
  },
]);

export const appearanceText = style({
  color: Color.text.link.light,
  backgroundColor: 'transparent',
});

export const appearanceFilled = style({
  color: Color.semantic.interactive[0],
  backgroundColor: Color.semantic.interactive[600],
});

export const appearanceOutlined = style({
  color: Color.text.link.light,
  backgroundColor: 'transparent',
  boxShadow: `inset 0 0 0 ${Size.border.m} currentColor`,
});

export const shapeSquare = style({
  borderRadius: Size.radius.m,
});

export const shapeCircle = style({
  borderRadius: Size.radius.full,
});

export const sizeS = style({
  minHeight: Size.interactiveComponent.s,
  padding: `0 ${Size.spacing.s}`,
  fontSize: Typography.fontSize.s,
  lineHeight: Typography.lineHeight.s.dense,
});

export const sizeM = style({
  minHeight: Size.interactiveComponent.m,
  padding: `0 ${Size.spacing.m}`,
  fontSize: Typography.fontSize.m,
  lineHeight: Typography.lineHeight.m.dense,
});

export const sizeL = style({
  minHeight: Size.interactiveComponent.l,
  padding: `0 ${Size.spacing.l}`,
  fontSize: Typography.fontSize.l,
  lineHeight: Typography.lineHeight.l.dense,
});

export const widthHug = style({
  width: 'auto',
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
