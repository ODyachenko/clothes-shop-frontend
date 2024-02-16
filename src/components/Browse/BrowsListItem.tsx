import React, { FC } from 'react';
import { ImageType } from '../../../@types';

const BrowsListItem: FC<ImageType> = ({ name, path }) => {
  return (
    <li className="browse__list-item flex justify-between bg-white rounded-3xl mb-4 overflow-hidden md:w-half-sp md:m-0">
      <strong className="text-lg font-bold py-4 px-4 sm:text-2xl sm:px-6 xl:text-3xl">
        {name}
      </strong>
      <picture>
        <img src={path} alt={name} />
      </picture>
    </li>
  );
};

export default BrowsListItem;
