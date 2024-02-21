import React, { FC } from 'react';
import { ProductTabType } from '../../../../@types';

const ProductTabsItem: FC<ProductTabType> = ({ id, value, state, handler }) => {
  return (
    <li
      onClick={() => handler(id)}
      aria-label="button"
      className={`text-text-o transition-all pb-5 border-b-2 border-solid hover:text-black cursor-pointer 
    ${id === state ? 'text-black border-black' : 'border-border-10'}`}
    >
      {value}
    </li>
  );
};

export default ProductTabsItem;
