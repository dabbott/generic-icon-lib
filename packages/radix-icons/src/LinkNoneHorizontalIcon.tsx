import * as React from 'react';
import { BaseIconProps } from './types';

interface LinkNoneHorizontalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const LinkNoneHorizontalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LinkNoneHorizontalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.56425 3.99988C4.5842 3.99989 4.60443 3.99989 4.62494 3.99989H5.49994C5.77608 3.99989 5.99994 4.22375 5.99994 4.49989C5.99994 4.77603 5.77608 4.99989 5.49994 4.99989H4.62494C4.02107 4.99989 3.7893 5.00213 3.606 5.03713C2.80285 5.1905 2.1918 5.78883 2.03758 6.53312C2.00256 6.70212 1.99994 6.91739 1.99994 7.49989C1.99994 8.08239 2.00256 8.29766 2.03758 8.46666C2.1918 9.21095 2.80285 9.80928 3.606 9.96265C3.7893 9.99765 4.02107 9.99989 4.62494 9.99989H5.49994C5.77608 9.99989 5.99994 10.2237 5.99994 10.4999C5.99994 10.776 5.77608 10.9999 5.49994 10.9999H4.62494C4.60443 10.9999 4.58421 10.9999 4.56426 10.9999C4.04157 11 3.7071 11 3.41843 10.9449C2.23813 10.7195 1.29869 9.82937 1.05838 8.66955C0.999767 8.38669 0.999832 8.05992 0.999932 7.56301C0.999936 7.54227 0.99994 7.52123 0.99994 7.49989C0.99994 7.47855 0.999936 7.45751 0.999932 7.43677C0.999832 6.93986 0.999767 6.61309 1.05838 6.33023C1.29869 5.17041 2.23813 4.28027 3.41843 4.05488C3.7071 3.99976 4.04157 3.99981 4.56425 3.99988ZM11.3939 5.03713C11.2106 5.00213 10.9788 4.99989 10.3749 4.99989H9.49994C9.2238 4.99989 8.99994 4.77603 8.99994 4.49989C8.99994 4.22375 9.2238 3.99989 9.49994 3.99989H10.3749C10.3954 3.99989 10.4157 3.99989 10.4356 3.99988C10.9583 3.99981 11.2928 3.99976 11.5814 4.05488C12.7618 4.28027 13.7012 5.17041 13.9415 6.33023C14.0001 6.61309 14 6.93985 13.9999 7.43676C13.9999 7.4575 13.9999 7.47854 13.9999 7.49989C13.9999 7.52124 13.9999 7.54228 13.9999 7.56302C14 8.05992 14.0001 8.38669 13.9415 8.66955C13.7012 9.82937 12.7618 10.7195 11.5814 10.9449C11.2928 11 10.9583 11 10.4356 10.9999C10.4157 10.9999 10.3954 10.9999 10.3749 10.9999H9.49994C9.2238 10.9999 8.99994 10.776 8.99994 10.4999C8.99994 10.2237 9.2238 9.99989 9.49994 9.99989H10.3749C10.9788 9.99989 11.2106 9.99765 11.3939 9.96265C12.197 9.80928 12.8081 9.21095 12.9623 8.46666C12.9973 8.29766 12.9999 8.08239 12.9999 7.49989C12.9999 6.91739 12.9973 6.70212 12.9623 6.53312C12.8081 5.78883 12.197 5.1905 11.3939 5.03713Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LinkNoneHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LinkNoneHorizontalIcon;
