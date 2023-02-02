import { Card } from './card';
import { ChevronDown } from './chevron-down';
import { Pound } from './pound';
import { Search } from './search';
import { Stripe } from './stripe';

export const ICONS = {
  card: () => Card,
  'chevron-down': () => ChevronDown,
  pound: () => Pound,
  search: () => Search,
  stripe: () => Stripe,
};

export type IconName = keyof typeof ICONS;
