import { Color, Size, Typography } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';
import { interactiveOverlay } from '../../styles/mixins.css';

const unset = style({
  background: 'unset',
  border: 'unset',
});

export const root = style([
  unset,
  interactiveOverlay,
  {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: Size.interactiveComponent.m,
    padding: `0 ${Size.spacing.m}`,
    fontFamily: Typography.fontFamily.sansSerif,
    fontSize: Typography.fontSize.m,
    lineHeight: Typography.lineHeight.m.dense,
    color: Color.text.link.light,
    borderRadius: Size.radius.m,
    cursor: 'pointer',
  },
]);
