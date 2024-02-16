import React, { FC } from 'react';
import { productTabs } from '../../../data/productTabs';
import ProductTabsItem from './ProductTabsItem';

const ProductTabs: FC = () => {
  return (
    <ul className="product__tabs flex gap-11 mb-5 border-b border-solid border-border-10 overflow-x-auto pb-5">
      {productTabs.map((tab) => (
        <ProductTabsItem key={tab.id} {...tab} />
      ))}
    </ul>
  );
};

export default ProductTabs;
