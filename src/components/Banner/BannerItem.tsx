import React, { FC } from 'react';
import { ImageType } from '../../../@types';

const BannerItem: FC<ImageType> = ({ path, name }) => {
  return (
    <li className="banner__list-item">
      <img src={path} alt={name} />
    </li>
  );
};

export default BannerItem;
