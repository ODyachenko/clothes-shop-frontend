import React, { FC } from 'react';
import { ImageType } from '../../../@types';

const BrowsListItem: FC<ImageType> = ({ name, path }) => {
  return (
    <li className="browse__list-item bg-white rounded-3xl mb-4">
      <strong className="tex text-2xl font-bold">{name}</strong>
      <img src={path} alt={name} />
    </li>
  );
};

export default BrowsListItem;
