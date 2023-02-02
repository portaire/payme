import { FC } from 'react';
import { IconProps } from './types';

export const ChevronDown: FC<IconProps> = ({
  height = 6,
  width = 8,
  fill = '#000',
  name = 'Chevron down',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title>{name}</title>
      <path
        d="M4.76822 5.07813C4.36843 5.55789 3.63157 5.55789 3.23178 5.07813L0.366822 1.64019C-0.175951 0.98886 0.287204 1.91977e-07 1.13504 2.66098e-07L6.86496 7.67023e-07C7.7128 8.41143e-07 8.17595 0.988859 7.63318 1.64019L4.76822 5.07813Z"
        fill={fill}
      />
    </svg>
  );
};
