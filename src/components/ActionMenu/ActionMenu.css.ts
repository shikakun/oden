import { Color, Shadow } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'inline-block',
});

export const overlay = style({
  position: 'absolute',
  width: 'max-content',
  maxWidth: '100vw',
  overflowWrap: 'break-word',
  backgroundColor: Color.background.page.light,
  boxShadow: Shadow.css[2].light,
  zIndex: 100,
});
