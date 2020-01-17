import * as React from 'react';
import { BaseIconProps } from './types';

interface DotsVerticalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DotsVerticalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DotsVerticalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
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
          d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9.625 2.5C9.625 3.67361 8.67361 4.625 7.5 4.625C6.32639 4.625 5.375 3.67361 5.375 2.5C5.375 1.32639 6.32639 0.375 7.5 0.375C8.67361 0.375 9.625 1.32639 9.625 2.5ZM7.5 3.625C8.12132 3.625 8.625 3.12132 8.625 2.5C8.625 1.87868 8.12132 1.375 7.5 1.375C6.87868 1.375 6.375 1.87868 6.375 2.5C6.375 3.12132 6.87868 3.625 7.5 3.625ZM9.625 7.5C9.625 8.6736 8.67361 9.625 7.5 9.625C6.32639 9.625 5.375 8.6736 5.375 7.5C5.375 6.3264 6.32639 5.375 7.5 5.375C8.67361 5.375 9.625 6.3264 9.625 7.5ZM7.5 8.625C8.12132 8.625 8.625 8.12132 8.625 7.5C8.625 6.87868 8.12132 6.375 7.5 6.375C6.87868 6.375 6.375 6.87868 6.375 7.5C6.375 8.12132 6.87868 8.625 7.5 8.625ZM7.5 14.625C8.67361 14.625 9.625 13.6736 9.625 12.5C9.625 11.3264 8.67361 10.375 7.5 10.375C6.32639 10.375 5.375 11.3264 5.375 12.5C5.375 13.6736 6.32639 14.625 7.5 14.625ZM8.625 12.5C8.625 13.1213 8.12132 13.625 7.5 13.625C6.87868 13.625 6.375 13.1213 6.375 12.5C6.375 11.8787 6.87868 11.375 7.5 11.375C8.12132 11.375 8.625 11.8787 8.625 12.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DotsVerticalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DotsVerticalIcon;
