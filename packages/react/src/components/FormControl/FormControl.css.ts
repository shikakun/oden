import { Color, Size, Typography } from '@shikakun/dashi';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: Size.spacing['2xs'],
});

export const label = style({
  display: 'inline-flex',
  gap: Size.spacing['2xs'],
  fontFamily: Typography.fontFamily.default,
  fontWeight: Typography.fontWeight.default,
  fontSize: Typography.fontSize.m,
  lineHeight: Typography.lineHeight.m.dense,
});

export const labelText = style({
  display: 'block',
});

export const requiredFieldIndicator = style({
  display: 'block',
});

export const requiredFieldIndicatorText = style({
  color: Color.semantic.primary[500],
});
