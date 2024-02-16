import React, { FC } from 'react';
import { ProductTabType } from '../../../../@types';

const ProductTabsItem: FC<ProductTabType> = ({ value }) => {
  return <button className="text-text-o flex-shrink-0">{value}</button>;
};

export default ProductTabsItem;
