import { Color, Size, Typography } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';
import { ellipsis, interactiveOverlay } from '../../styles/mixins.css';

const unset = style({
  background: 'unset',
  border: 'unset',
  textDecoration: 'unset',
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
    maxWidth: '100%',
    fontFamily: Typography.fontFamily.sansSerif,
    fontWeight: Typography.fontWeight.default,
    fontSize: Typography.fontSize.m,
    lineHeight: Typography.lineHeight.m.dense,
    cursor: 'pointer',
  },
]);

export const label = style([
  ellipsis,
  {
    display: 'block',
    wordBreak: 'break-all',
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
});

export const sizeM = style({
  minHeight: Size.interactiveComponent.m,
  padding: `0 ${Size.spacing.m}`,
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

export const hasLeadingIcon = style({
  paddingLeft: '0',
});

export const hasTrailingIcon = style({
  paddingRight: '0',
});

export const iconOnly = style({
  paddingLeft: '0',
  paddingRight: '0',
});

export const media = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5em',
});

export const mediaSizeS = style({
  minWidth: Size.interactiveComponent.s,
  minHeight: Size.interactiveComponent.s,
});

export const mediaSizeM = style({
  minWidth: Size.interactiveComponent.m,
  minHeight: Size.interactiveComponent.m,
});
