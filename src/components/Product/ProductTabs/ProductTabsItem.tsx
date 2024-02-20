import React, { FC } from 'react';
import { ProductTabType } from '../../../../@types';

const ProductTabsItem: FC<ProductTabType> = ({ value }) => {
  return (
    <button className="text-text-o transition-all pb-5 hover:text-black">
      {value}
    </button>
  );
};

export default ProductTabsItem;
