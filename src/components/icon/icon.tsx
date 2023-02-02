import { FC } from 'react';
import { ICONS } from './icons/consts';
import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ name, ...iconProps }) => {
  const IconComponent = ICONS[name]();

  return <IconComponent {...iconProps} />;
};
