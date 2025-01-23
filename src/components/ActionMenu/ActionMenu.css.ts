import { Color, Shadow } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'inline-block',
});

export const overlay = styleVariants({
  bottom: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: Color.background.page.light,
    boxShadow: Shadow.css[2].light,
    zIndex: 100,
  },
  top: {
    position: 'absolute',
    bottom: '100%',
    left: 0,
    backgroundColor: Color.background.page.light,
    boxShadow: Shadow.css[2].light,
    zIndex: 100,
  },
});
