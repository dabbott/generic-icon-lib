import * as React from 'react';
import { IconProps } from './types';

export const BorderAllIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 0.25C0.585786 0.25 0.25 0.585786 0.25 1V14C0.25 14.4142 0.585786 14.75 1 14.75H14C14.4142 14.75 14.75 14.4142 14.75 14V1C14.75 0.585786 14.4142 0.25 14 0.25H1ZM1.75 13.25V1.75H13.25V13.25H1.75ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5C8 5.22386 7.77614 5 7.5 5ZM7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5C8 3.77614 7.77614 4 7.5 4C7.22386 4 7 3.77614 7 3.5ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8C7.77614 8 8 7.77614 8 7.5C8 7.22386 7.77614 7 7.5 7ZM5 7.5C5 7.22386 5.22386 7 5.5 7C5.77614 7 6 7.22386 6 7.5C6 7.77614 5.77614 8 5.5 8C5.22386 8 5 7.77614 5 7.5ZM3.5 7C3.22386 7 3 7.22386 3 7.5C3 7.77614 3.22386 8 3.5 8C3.77614 8 4 7.77614 4 7.5C4 7.22386 3.77614 7 3.5 7ZM9 7.5C9 7.22386 9.22386 7 9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5ZM11.5 7C11.2239 7 11 7.22386 11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7ZM7 9.5C7 9.22386 7.22386 9 7.5 9C7.77614 9 8 9.22386 8 9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5ZM7.5 11C7.22386 11 7 11.2239 7 11.5C7 11.7761 7.22386 12 7.5 12C7.77614 12 8 11.7761 8 11.5C8 11.2239 7.77614 11 7.5 11Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BorderAllIcon;
