import React, { FC } from 'react';
import { ProductColorsType } from '../../../@types';

const ColorsListItem: FC<ProductColorsType> = ({ value }) => {
  return (
    <li className="colors__list-item">
      <button
        className="w-10 h-10 rounded-full bg-black border-2 border-border-10 border-solid  hover:border-gray-300"
        style={{ backgroundColor: value }}
      />
    </li>
  );
};

export default ColorsListItem;
