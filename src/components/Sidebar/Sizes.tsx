import React, { FC } from 'react';
import { productSizes } from '../../data/productSizes';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setActiveSize } from '../../redux/slices/filterSlice';
import SizesList from '../Sizes/SizesList';
import SidebarCategory from './SidebarCategory';

const Sizes: FC = () => {
  const { activeSize } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === activeSize
      ? dispatch(setActiveSize(0))
      : dispatch(setActiveSize(id));
  };

  return (
    <SidebarCategory title="Sizes">
      <SizesList
        sizes={productSizes}
        state={activeSize}
        handler={onClickHandler}
      />
    </SidebarCategory>
  );
};

export default Sizes;
