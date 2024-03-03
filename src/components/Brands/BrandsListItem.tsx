import React, { FC } from 'react';
import { BrandsType } from '../../../@types';

const BrandsListItem: FC<BrandsType> = ({ name, logo }) => {
  return (
    <li className="bg-white cursor-pointer rounded-2xl shadow-card-sh px-4 py-6 mb-4 sm:mb-0 lg:transition-all lg:duration-300">
      <img className="logo max-h-16 mx-auto mb-4" src={logo} alt={name} />
      <h2 className="font-bold text-center lg:text-xl">{name}</h2>
    </li>
  );
};

export default BrandsListItem;
