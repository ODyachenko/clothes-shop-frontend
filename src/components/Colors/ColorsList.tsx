import React, { FC } from 'react';
import { ProductColorsType } from '../../../@types';
import ColorsListItem from './ColorsListItem';

type ColorsListProps = {
  colors: ProductColorsType[];
};

const ColorsList: FC<ColorsListProps> = ({ colors }) => {
  return (
    <ul className="colors__list flex flex-wrap gap-4">
      {colors.map((color) => (
        <ColorsListItem key={color.id} {...color} />
      ))}
    </ul>
  );
};

export default ColorsList;
