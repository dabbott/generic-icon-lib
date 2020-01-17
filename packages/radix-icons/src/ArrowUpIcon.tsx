import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ArrowUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ArrowUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.79289 1.79289C7.18342 1.40237 7.81658 1.40237 8.20711 1.79289L12.2071 5.79289C12.5976 6.18342 12.5976 6.81658 12.2071 7.20711C11.8166 7.59763 11.1834 7.59763 10.7929 7.20711L8.5 4.91421L8.5 12.5C8.5 13.0523 8.05229 13.5 7.5 13.5C6.94772 13.5 6.5 13.0523 6.5 12.5L6.5 4.91421L4.20711 7.20711C3.81658 7.59763 3.18342 7.59763 2.79289 7.20711C2.40237 6.81658 2.40237 6.18342 2.79289 5.79289L6.79289 1.79289Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowUpIcon;
