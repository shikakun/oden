import { Animation, Color, Typography } from '@shikakun/dashi';
import { style, styleVariants } from '@vanilla-extract/css';

const breakpoints = {
  '2xs': '330px',
  xs: '370px',
  s: '600px',
  m: '800px',
  l: '1100px',
  '2xl': '1400px',
};

export const mqBoundary = (
  breakpoint: keyof typeof breakpoints,
  styles: Record<string, string>,
  boundaryType: 'above' | 'below' = 'above',
) => {
  if (!breakpoints[breakpoint]) {
    throw new Error(`Invalid breakpoint: ${breakpoint}`);
  }

  const condition =
    boundaryType === 'above'
      ? `(width >= ${breakpoints[breakpoint]})`
      : `(width < ${breakpoints[breakpoint]})`;

  return { [`@media ${condition}`]: styles };
};

export const interactiveOverlay = styleVariants({
  light: {
    position: 'relative',
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
  },
  dark: {
    position: 'relative',
    '::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit',
      backgroundColor: Color.overlay.background.enabled.dark,
      transition: `background-color ${Animation.duration.default}`,
    },
    selectors: {
      '&:hover::after': {
        backgroundColor: Color.overlay.background.hover.dark,
      },
      '&:active::after': {
        backgroundColor: Color.overlay.background.active.dark,
      },
      '&:focus::after': {
        backgroundColor: Color.overlay.background.focus.dark,
      },
      '&:disabled::after': {
        backgroundColor: Color.overlay.background.disabled.dark,
      },
    },
  },
});

export const ellipsis = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const leadingTrim = style({
  marginBlock: 'calc((1em - 1lh) / 2)',
});

export const visuallyHidden = style({
  width: '1px !important',
  height: '1px !important',
  padding: '0 !important',
  margin: '-1px !important',
  overflow: 'hidden !important',
  clip: 'rect(0, 0, 0, 0) !important',
  whiteSpace: 'nowrap !important',
  border: '0 !important',
});

export const typography = (
  type: 'heading1' | 'heading2' | 'entryTitle' | 'body' | 'footnote',
) => {
  switch (type) {
    case 'heading1':
      return style({
        fontSize: Typography.fontSize['2xl'],
        lineHeight: Typography.lineHeight['2xl'].dense,
        ...mqBoundary('m', {
          fontSize: Typography.fontSize['3xl'],
          lineHeight: Typography.lineHeight['3xl'].dense,
        }),
      });
    case 'heading2':
      return style({
        fontSize: Typography.fontSize.xl,
        lineHeight: Typography.lineHeight.xl.dense,
      });
    case 'entryTitle':
      return style({
        fontSize: Typography.fontSize['2xl'],
        lineHeight: Typography.lineHeight['2xl'].dense,
        ...mqBoundary('m', {
          fontSize: Typography.fontSize['3xl'],
          lineHeight: Typography.lineHeight['3xl'].dense,
        }),
      });
    case 'body':
      return style({
        fontSize: Typography.fontSize.m,
        lineHeight: Typography.lineHeight.m.comfort,
      });
    case 'footnote':
      return style({
        fontSize: Typography.fontSize.s,
        lineHeight: Typography.lineHeight.s.default,
      });
    default:
      return {};
  }
};

export const initialize = (HTMLElement: string) => {
  switch (HTMLElement) {
    // a {
    //   color: inherit;
    //   text-decoration: unset;
    // }
    case 'a':
      return style({
        color: 'inherit',
        textDecoration: 'unset',
      });

    // b {
    //   font-weight: unset;
    // }
    case 'b':
      return style({
        fontWeight: 'unset',
      });

    // blockquote {
    //   margin: unset;
    // }
    case 'blockquote':
      return style({
        margin: 'unset',
      });

    // body {
    //   margin: unset;
    // }
    case 'body':
      return style({
        margin: 'unset',
      });

    // cite {
    //   font-style: unset;
    // }
    case 'cite':
      return style({
        fontStyle: 'unset',
      });

    // code, kbd, pre, samp {
    //   font-family: inherit;
    //   font-size: unset;
    // }
    case 'code':
    case 'kbd':
    case 'pre':
    case 'samp':
      return style({
        fontFamily: 'inherit',
        fontSize: 'unset',
      });

    // dd, dl {
    //   margin: unset;
    // }
    case 'dd':
    case 'dl':
      return style({
        margin: 'unset',
      });

    // em {
    //   font-style: unset;
    //   font-weight: unset;
    // }
    case 'em':
      return style({
        fontStyle: 'unset',
        fontWeight: 'unset',
      });

    // fieldset {
    //   padding: unset;
    //   margin: unset;
    //   border: unset;
    // }
    case 'fieldset':
      return style({
        padding: 'unset',
        margin: 'unset',
        border: 'unset',
      });

    // figure {
    //   margin: unset;
    // }
    case 'figure':
      return style({
        margin: 'unset',
      });

    // button, input, optgroup, select, textarea {
    //   background: unset;
    //   border: unset;
    //   border-radius: unset;
    //   font-family: inherit;
    //   margin: unset;
    // }
    case 'button':
    case 'input':
    case 'optgroup':
    case 'select':
    case 'textarea':
      return style({
        background: 'unset',
        border: 'unset',
        borderRadius: 'unset',
        fontFamily: 'inherit',
        margin: 'unset',
      });

    // h1, h2, h3, h4, h5, h6 {
    //   font-size: unset;
    //   font-weight: unset;
    //   margin: unset;
    // }
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return style({
        fontSize: 'unset',
        fontWeight: 'unset',
        margin: 'unset',
      });

    // i {
    //   font-style: unset;
    // }
    case 'i':
      return style({
        fontStyle: 'unset',
      });

    // iframe {
    //   border: unset;
    // }
    case 'iframe':
      return style({
        border: 'unset',
      });

    // legend {
    //   padding: unset;
    // }
    case 'legend':
      return style({
        padding: 'unset',
      });

    // ul, ol {
    //   list-style: none;
    //   margin: unset;
    //   padding: unset;
    // }
    case 'ul':
    case 'ol':
      return style({
        listStyle: 'none',
        margin: 'unset',
        padding: 'unset',
      });

    // p {
    //   margin: unset;
    // }
    case 'p':
      return style({
        margin: 'unset',
      });

    // popover {
    //   color: inherit;
    //   border: unset;
    //   margin: unset;
    //   padding: unset;
    // }
    case 'popover':
      return style({
        color: 'inherit',
        border: 'unset',
        margin: 'unset',
        padding: 'unset',
      });

    // small {
    //   font-size: unset;
    // }
    case 'small':
      return style({
        fontSize: 'unset',
      });

    // strong {
    //   font-weight: unset;
    // }
    case 'strong':
      return style({
        fontWeight: 'unset',
      });

    default:
      return {};
  }
};
