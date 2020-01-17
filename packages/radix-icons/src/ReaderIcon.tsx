import * as React from 'react';
import { BaseIconProps } from './types';

interface ReaderIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ReaderIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ReaderIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.19999 1H4.1774H4.17739C3.86935 0.999988 3.60367 0.999977 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51441 1.34472 2.34472 1.51442 2.22103 1.71625C2.09112 1.92825 2.04256 2.15576 2.02066 2.38609C1.99997 2.60367 1.99998 2.86935 1.99999 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99998 12.1307 1.99997 12.3963 2.02066 12.6139C2.04256 12.8442 2.09112 13.0717 2.22103 13.2837C2.34472 13.4856 2.51441 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60367 14 3.86936 14 4.1774 14H4.19999H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999977 11.1306 0.999988 10.8226 1H10.8H4.19999ZM3.23874 2.07368C3.26721 2.05623 3.32361 2.03112 3.48074 2.01618C3.64531 2.00053 3.86297 2 4.19999 2H10.8C11.137 2 11.3547 2.00053 11.5192 2.01618C11.6764 2.03112 11.7328 2.05623 11.7612 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7612 12.9263C11.7328 12.9438 11.6764 12.9689 11.5192 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.19999C3.86297 13 3.64531 12.9995 3.48074 12.9838C3.32361 12.9689 3.26721 12.9438 3.23874 12.9263C3.17147 12.8851 3.1149 12.8285 3.07367 12.7613C3.05623 12.7328 3.03111 12.6764 3.01617 12.5193C3.00052 12.3547 2.99999 12.137 2.99999 11.8V3.2C2.99999 2.86298 3.00052 2.64532 3.01617 2.48075C3.03111 2.32362 3.05623 2.26722 3.07367 2.23875C3.1149 2.17147 3.17147 2.11491 3.23874 2.07368ZM4.99999 10C4.72385 10 4.49999 10.2239 4.49999 10.5C4.49999 10.7761 4.72385 11 4.99999 11H7.99999C8.27613 11 8.49999 10.7761 8.49999 10.5C8.49999 10.2239 8.27613 10 7.99999 10H4.99999ZM4.49999 7.5C4.49999 7.22386 4.72385 7 4.99999 7H9.99999C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 9.99999 8H4.99999C4.72385 8 4.49999 7.77614 4.49999 7.5ZM4.99999 4C4.72385 4 4.49999 4.22386 4.49999 4.5C4.49999 4.77614 4.72385 5 4.99999 5H9.99999C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 9.99999 4H4.99999Z"
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
          d="M2.64736 1.9775C2.5 2.21797 2.5 2.54531 2.5 3.2V11.8C2.5 12.4547 2.5 12.782 2.64736 13.0225C2.72982 13.1571 2.84295 13.2702 2.9775 13.3526C3.21797 13.5 3.54531 13.5 4.2 13.5H10.8C11.4547 13.5 11.782 13.5 12.0225 13.3526C12.1571 13.2702 12.2702 13.1571 12.3526 13.0225C12.5 12.782 12.5 12.4547 12.5 11.8V3.2C12.5 2.54531 12.5 2.21797 12.3526 1.9775C12.2702 1.84295 12.1571 1.72982 12.0225 1.64736C11.782 1.5 11.4547 1.5 10.8 1.5H4.2C3.54531 1.5 3.21797 1.5 2.9775 1.64736C2.84295 1.72982 2.72982 1.84295 2.64736 1.9775Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ReaderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ReaderIcon;
