import React, { FC } from 'react';
import { ProductTabType } from '../../../../@types';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setActiveTab } from '../../../redux/slices/productSlice';

const ProductTabsItem: FC<ProductTabType> = ({ id, value }) => {
  const { activeTab } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return (
    <li
      onClick={() => dispatch(setActiveTab(id))}
      aria-label="button"
      className={`text-text-o transition-all pb-5 border-b-2 border-solid hover:text-black cursor-pointer 
    ${id === activeTab ? 'text-black border-black' : 'border-border-10'}`}
    >
      {value}
    </li>
  );
};

export default ProductTabsItem;
