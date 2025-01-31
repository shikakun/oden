import { Color, Size } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';

const unset = style([
  {
    border: 'unset',
    maxWidth: 'unset',
    maxHeight: 'unset',
    padding: 'unset',
    margin: 'unset',
  },
  {
    '::backdrop': {
      background: 'unset',
    },
  },
]);

export const root = style([
  unset,
  {
    position: 'fixed',
    inset: 0,
    height: '100lvh',
    backgroundColor: 'transparent',
    overflowY: 'scroll',
  },
]);

export const container = style({
  display: 'flex',
  flexDirection: 'column-reverse',
});

export const body = style({
  boxSizing: 'border-box',
  position: 'relative',
  backgroundColor: Color.background.page.light,
  width: '100vw',
  minHeight: '50vh',
});

export const backdrop = style({
  backgroundColor: 'rgba(0, 0, 0, 0.12)',
  height: '50vh',
});

export const closeButtonWrapper = style({
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  padding: Size.spacing.xs,
  pointerEvents: 'none',
});

export const closeButtonContainer = style({
  position: 'sticky',
  top: Size.spacing.xs,
  pointerEvents: 'auto',
});
