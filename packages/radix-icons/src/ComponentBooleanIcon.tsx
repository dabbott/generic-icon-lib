import * as React from 'react';
import { IconProps } from './types';

export const ComponentBooleanIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.85367 1.48957C7.65841 1.29431 7.34182 1.29431 7.14656 1.48957L1.48971 7.14642C1.29445 7.34169 1.29445 7.65827 1.48971 7.85353L7.14656 13.5104C7.34182 13.7056 7.65841 13.7056 7.85367 13.5104L13.5105 7.85353C13.7058 7.65827 13.7058 7.34169 13.5105 7.14642L7.85367 1.48957ZM7.5 2.55035L2.55037 7.49998L7.5 12.4496V2.55035Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ComponentBooleanIcon;
