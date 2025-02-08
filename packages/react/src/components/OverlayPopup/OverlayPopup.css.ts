import { Color, Shadow } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'inline-block',
});

export const overlay = style({
  position: 'absolute',
  width: 'max-content',
  maxWidth: '100vw',
  overflowWrap: 'break-word',
  zIndex: 100,
});

export const overlayColor = styleVariants({
  light: {
    color: Color.text.default.light,
    backgroundColor: Color.background.page.light,
    boxShadow: Shadow.css[2].light,
  },
  dark: {
    color: Color.text.default.dark,
    backgroundColor: Color.background.page.dark,
    boxShadow: Shadow.css[2].dark,
  },
});
