import { Breakpoints } from './Breakpoints';

type RadiusOptions = 'sm' | 'md' | 'complete';
type TypographyOptions =
  | 'modal-title'
  | 'button'
  | 'label'
  | 'error'
  | 'placeholder'
  | 'input'
  | 'small-input'
  | 'small-button';

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
    'text-inverted': string;
    error: string;
    outline: string;
    outline2: string;
    'tertiary-light': string;
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
