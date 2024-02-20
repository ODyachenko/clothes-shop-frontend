import React, { FC } from 'react';
import { productTabs } from '../../../data/productTabs';
import ProductTabsItem from './ProductTabsItem';

const ProductTabs: FC = () => {
  return (
    <ul className="product__tabs grid grid-cols-3 mb-5 border-b border-solid border-border-10 text-center lg:text-xl">
      {productTabs.map((tab) => (
        <ProductTabsItem key={tab.id} {...tab} />
      ))}
    </ul>
  );
};

export default ProductTabs;
