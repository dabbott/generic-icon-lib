import * as React from 'react';
import { IconProps } from './types';

export const AlignVerticalCentersIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 3.25C2 2.55964 2.55964 2 3.25 2L11.75 2C12.4404 2 13 2.55964 13 3.25L13 5.75C13 6.44036 12.4404 7 11.75 7L3.25 7C2.55964 7 2 6.44036 2 5.75L2 3.25ZM3.25 3C3.11193 3 3 3.11193 3 3.25L3 5.75C3 5.88807 3.11193 6 3.25 6L11.75 6C11.8881 6 12 5.88807 12 5.75L12 3.25C12 3.11193 11.8881 3 11.75 3L3.25 3ZM4 9.25C4 8.55964 4.55964 8 5.25 8L9.75 8C10.4404 8 11 8.55964 11 9.25L11 11.75C11 12.4404 10.4404 13 9.75 13L5.25 13C4.55964 13 4 12.4404 4 11.75L4 9.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignVerticalCentersIcon;
