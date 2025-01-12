import { Color, Size, Typography } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';
import { ellipsis, interactiveOverlay } from '../../styles/mixins.css';

const RADIUS_SIZE = '0';
const LABEL_PADDING_INLINE_SIZE_S = Size.spacing.s;
const LABEL_PADDING_INLINE_SIZE_M = Size.spacing.m;
const BORDER_SIZE = Size.border.l;
const BORDER_COLOR = Color.border.muted.light;

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
    maxWidth: '100%',
    fontFamily: Typography.fontFamily.default,
    fontWeight: Typography.fontWeight.default,
    fontSize: Typography.fontSize.m,
    lineHeight: Typography.lineHeight.m.dense,
    cursor: 'pointer',
  },
]);

export const body = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
});

export const bodyLayoutCenter = style({
  justifyContent: 'center',
});

export const bodyLayoutStart = style({
  justifyContent: 'flex-start',
});

export const bodyLayoutSpaceBetween = style({
  flex: '1',
  minWidth: '0',
});

export const label = style([
  ellipsis,
  {
    maxWidth: '100%',
    display: 'block',
    wordBreak: 'break-all',
  },
]);

export const appearanceText = style({
  color: Color.text.link.light,
  backgroundColor: 'transparent',
});

export const appearanceOutlined = style({
  color: Color.text.link.light,
  backgroundColor: Color.background.page.light,
  boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR}`,
});

export const appearanceTinted = style({
  color: Color.semantic.interactive[900],
  backgroundColor: Color.semantic.interactive[50],
});

export const appearanceFilled = style({
  color: Color.semantic.interactive[0],
  backgroundColor: Color.semantic.interactive[600],
});

export const shapeSquare = style({
  borderRadius: RADIUS_SIZE,
});

export const shapeCircle = style({
  borderRadius: Size.radius.full,
});

export const sizeS = style({
  minHeight: Size.interactiveComponent.s,
  padding: `0 ${LABEL_PADDING_INLINE_SIZE_S}`,
});

export const sizeM = style({
  minHeight: Size.interactiveComponent.m,
  padding: `0 ${LABEL_PADDING_INLINE_SIZE_M}`,
});

export const widthAuto = style({
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

export const layoutCenter = style({
  justifyContent: 'center',
});

export const layoutStart = style({
  justifyContent: 'flex-start',
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
  fontSize: '1.25em',
});

export const mediaSizeS = style({
  minWidth: Size.interactiveComponent.s,
  minHeight: Size.interactiveComponent.s,
});

export const mediaSizeM = style({
  minWidth: Size.interactiveComponent.m,
  minHeight: Size.interactiveComponent.m,
});
