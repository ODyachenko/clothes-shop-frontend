import React, { FC } from 'react';
import { ImageType } from '../../../@types';

const BannerItem: FC<ImageType> = ({ path, name }) => {
  return (
    <li className="banner__list-item flex-shrink-0 ">
      <img className="max-h-6 lg:max-h-none" src={path} alt={name} />
    </li>
  );
};

export default BannerItem;
