import { Color, Size, Typography } from '@shikakun/dashi';
import { createContainer, style } from '@vanilla-extract/css';

const formContainer = createContainer();

export const form = style({
  containerName: formContainer,
  containerType: 'inline-size',
  display: 'flex',
  flexDirection: 'column',
  gap: Size.spacing['m'],
  maxWidth: '30rem',
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: Size.spacing['2xs'],
});

export const label = style({
  color: Color.text.default.light,
  fontSize: Typography.fontSize['m'],
  lineHeight: Typography.lineHeight['m'].dense,
});

export const action = style([
  {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '2fr repeat(2, 1fr)',
    gap: Size.spacing['xs'],
    paddingBlock: Size.spacing['xs'],
    '@container': {
      [`${formContainer} (min-width: 370px)`]: {
        gridTemplateColumns: '2fr repeat(4, 1fr)',
      },
    },
  },
]);
