import React, { FC, useState } from 'react';
import { productTabs } from '../../../data/productTabs';
import ProductTabsItem from './ProductTabsItem';

const ProductTabs: FC = () => {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <ul className="product__tabs grid grid-cols-3 mb-5 text-center lg:text-xl">
      {productTabs.map((tab) => (
        <ProductTabsItem
          key={tab.id}
          {...tab}
          state={isActive}
          handler={setIsActive}
        />
      ))}
    </ul>
  );
};

export default ProductTabs;
