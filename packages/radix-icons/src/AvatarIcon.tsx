import * as React from 'react';
import { BaseIconProps } from './types';

interface AvatarIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const AvatarIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: AvatarIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.127 7.5a6.373 6.373 0 1112.746 0 6.373 6.373 0 01-12.746 0zM7.5 2.077a5.423 5.423 0 00-4.048 9.031A4.969 4.969 0 017.5 9.025c1.67 0 3.146.822 4.049 2.083A5.423 5.423 0 007.5 2.078zm3.349 9.688A4.02 4.02 0 007.5 9.976a4.02 4.02 0 00-3.348 1.79A5.4 5.4 0 007.5 12.924a5.4 5.4 0 003.349-1.158zM5.15 6.505a2.35 2.35 0 114.7 0 2.35 2.35 0 01-4.7 0zm2.35-1.4a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`AvatarIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default AvatarIcon;