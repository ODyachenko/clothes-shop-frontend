import React, { FC } from 'react';
import { ProductSizeType } from '../../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setActiveSize } from '../../redux/slices/filterSlice';
import OptionBtn from '../../UI/OptionBtn';
import SizesListItem from './SizesListItem';

type SizesListProps = {
  sizes: ProductSizeType[];
};

const SizesList: FC<SizesListProps> = ({ sizes }) => {
  const { activeSize } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === activeSize
      ? dispatch(setActiveSize(0))
      : dispatch(setActiveSize(id));
  };

  return (
    <ul className="sizes__list flex flex-wrap gap-2">
      {sizes.map((size) => (
        <SizesListItem
          key={size.id}
          {...size}
          selectedSizeId={activeSize}
          setSelectedSizeId={onClickHandler}
        />
      ))}
    </ul>
  );
};

export default SizesList;
