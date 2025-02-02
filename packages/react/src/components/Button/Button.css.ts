import { Color, Size, Typography } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';
import { ellipsis, interactiveOverlay } from '../../styles/mixins.css';

const RADIUS_SIZE = '0';
const LABEL_PADDING_INLINE_SIZE_S = Size.spacing.s;
const LABEL_PADDING_INLINE_SIZE_M = Size.spacing.m;
const BORDER_SIZE = Size.border.l;
const BORDER_COLOR = Color.border.muted.light;

export const root = style([
  interactiveOverlay,
  {
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
  },
]);

export const appearance = styleVariants({
  text: { color: Color.text.link.light, backgroundColor: 'transparent' },
  outlined: {
    color: Color.text.link.light,
    backgroundColor: Color.background.page.light,
    boxShadow: `inset 0 0 0 ${BORDER_SIZE} ${BORDER_COLOR}`,
  },
  tinted: {
    color: Color.semantic.interactive[900],
    backgroundColor: Color.semantic.interactive[50],
  },
  filled: {
    color: Color.semantic.interactive[0],
    backgroundColor: Color.semantic.interactive[600],
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
