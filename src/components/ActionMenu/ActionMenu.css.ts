import { Color, Shadow } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'inline-block',
});

const createOverlayStyle = (positionStyles: {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}) => ({
  position: 'absolute' as const,
  backgroundColor: Color.background.page.light,
  boxShadow: Shadow.css[2].light,
  zIndex: 100,
  ...positionStyles,
});

export const overlay = styleVariants({
  'bottom-left': createOverlayStyle({ top: '100%', left: '0' }),
  'bottom-right': createOverlayStyle({ top: '100%', right: '0' }),
  'top-left': createOverlayStyle({ bottom: '100%', left: '0' }),
  'top-right': createOverlayStyle({ bottom: '100%', right: '0' }),
});
