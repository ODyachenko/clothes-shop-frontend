import React, { FC } from 'react';
import { ProductColorsType } from '../../../@types';

const ColorsListItem: FC<ProductColorsType> = ({ value }) => {
  return (
    <li className="colors__list-item">
      <button
        className="w-9 h-9 rounded-full bg-black border border-solid border-border-10"
        style={{ backgroundColor: value }}
      />
    </li>
  );
};

export default ColorsListItem;
