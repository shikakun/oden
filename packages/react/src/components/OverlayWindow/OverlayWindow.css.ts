import { Color, Size } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';

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
    width: '100vw',
    height: '100lvh',
    backgroundColor: 'transparent',
    overflowY: 'scroll',
  },
]);

export const container = styleVariants({
  bottom: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  right: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});

export const body = style({
  boxSizing: 'border-box',
  position: 'relative',
  backgroundColor: Color.background.page.light,
});

export const bodyPosition = styleVariants({
  bottom: {
    width: '100vw',
    minHeight: '50vh',
  },
  right: {
    width: 'calc(100vw - 4rem)',
    maxWidth: '22.5rem',
  },
});

export const backdrop = style({
  flex: '1',
  minWidth: '0',
  minHeight: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.12)',
  height: '50vh',
});

export const backdropPosition = styleVariants({
  bottom: {
    height: '50vh',
  },
  right: {
    height: '100lvh',
  },
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
