import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductColorsType } from '../../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setActiveColor } from '../../redux/slices/filterSlice';
import ColorsListItem from './ColorsListItem';
import './styles.scss';

type ColorsListProps = {
  colors: ProductColorsType[];
};

const ColorsList: FC<ColorsListProps> = ({ colors }) => {
  const { activeColor } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === activeColor
      ? dispatch(setActiveColor(0))
      : dispatch(setActiveColor(id));
  };

  return (
    <ul className="colors__list flex flex-wrap gap-4">
      {colors.map((color) => (
        <ColorsListItem
          key={color.id}
          {...color}
          selectedColorId={activeColor}
          onClickHandler={onClickHandler}
        />
      ))}
    </ul>
  );
};

export default ColorsList;
