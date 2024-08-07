import { Animation, Color } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';

export const interactiveOverlay = style({
  '::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    backgroundColor: Color.overlay.background.enabled.light,
    transition: `background-color ${Animation.duration.default}`,
  },
  selectors: {
    '&:hover::after': {
      backgroundColor: Color.overlay.background.hover.light,
    },
    '&:active::after': {
      backgroundColor: Color.overlay.background.active.light,
    },
    '&:focus::after': {
      backgroundColor: Color.overlay.background.focus.light,
    },
    '&:disabled::after': {
      backgroundColor: Color.overlay.background.disabled.light,
    },
  },
});

export const ellipsis = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
