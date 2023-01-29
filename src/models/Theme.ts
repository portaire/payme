import { Breakpoints } from './Breakpoints';

type RadiusOptions = 'sm' | 'complete';
type TypographyOptions = 'modal-title' | 'button' | 'label';

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
    'text-inverted': string;
    accent: string;
    outline: string;
  };
  font: {
    main: string;
  };
  radius: (type: RadiusOptions) => string | null;
  spacing: (value: number) => string | null;
  fontSize: (value: number) => string;
  minBp: (breakpoint: Breakpoints) => string | null;
  typography: (type: TypographyOptions) => string | null;
}
