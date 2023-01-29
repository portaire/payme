import { Breakpoints } from '@models/Breakpoints';
import { Theme } from '@models/Theme';

const breakpointValues: {
  [key in Breakpoints]: number;
} = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

const setBreakpoint = (breakpoint: Breakpoints) => {
  if (typeof breakpoint === 'string' && breakpoint in breakpointValues)
    return breakpointValues[breakpoint];

  return breakpoint;
};

// convert pixels to rem
const pxToRem = (px: number) => `${px / 16}rem`;

const theme: Theme = {
  colors: {
    primary: '#000000',
    secondary: '#FFFFFF',
    tertiary: '#C4C4C4',
    text: '#000000',
    'text-inverted': '#FFFFFF',
    error: '#E52727',
    outline: '#0066FF',
  },
  font: {
    main: 'Object Sans, sans-serif',
  },
  radius: (type) => {
    if (!type) return null;

    const radiusValues = {
      sm: '3px',
      complete: '100%',
    };

    return radiusValues[type];
  },
  spacing: (value) => {
    if (!value) return null;

    return pxToRem(value);
  },
  fontSize: (value) => pxToRem(value),
  typography: (type) => {
    if (!type) return null;

    const typographyValues = {
      'modal-title': `
        font-family: ${theme.font.main};
        font-size: ${theme.fontSize(20)};
        font-weight: 500;
        line-height: ${pxToRem(22)};
      `,
      button: `
        font-family: ${theme.font.main};
        font-size: ${theme.fontSize(14)};
        font-weight: 400;
        line-height: ${pxToRem(8)};
    `,
      label: `
        font-family: ${theme.font.main};
        font-size: ${theme.fontSize(14)};
        font-weight: 500;
        line-height: ${pxToRem(8)};
    `,
      error: `
        font-family: ${theme.font.main};
        font-size: ${theme.fontSize(13)};
        font-weight: 400;
        line-height: ${pxToRem(16)};
      `,
      placeholder: `
        font-family: ${theme.font.main};
        font-size: ${theme.fontSize(16)};
        line-height: ${pxToRem(16)};
        font-weight: 400;
      `,
      input: `
        font-family: ${theme.font.main};
        font-size: ${theme.fontSize(16)};
        line-height: ${pxToRem(16)};
        font-weight: 400;
      `,
    };

    return typographyValues[type];
  },

  minBp: (breakpoint) => `@media (min-width: ${setBreakpoint(breakpoint)}px)`,
};

// ! EXAMPLE USAGE
// ${({ theme }) => theme.minBp('tablet')} {
//   padding: 0 80px;
// }
// ${({ theme }) => theme.minBp('desktop')} {
//   padding: 0 150px;
// }

export default theme;
