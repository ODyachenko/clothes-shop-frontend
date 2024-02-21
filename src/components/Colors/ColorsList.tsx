import React, { FC, useState } from 'react';
import { ProductColorsType } from '../../../@types';
import ColorsListItem from './ColorsListItem';
import './styles.scss';

type ColorsListProps = {
  colors: ProductColorsType[];
};

const ColorsList: FC<ColorsListProps> = ({ colors }) => {
  const [selectedColorId, setSelectedColorId] = useState<number>(1);

  const onClickHandler = (id: number) => {
    setSelectedColorId(id);
  };

  return (
    <ul className="colors__list flex flex-wrap gap-4">
      {colors.map((color) => (
        <ColorsListItem
          key={color.id}
          {...color}
          selectedColorId={selectedColorId}
          onClickHandler={onClickHandler}
        />
      ))}
    </ul>
  );
};

export default ColorsList;
