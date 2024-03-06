import { FC } from 'react';
import ProductTabsItem from './ProductTabsItem';
import { productTabs } from '../../../data/productTabs';

const ProductTabs: FC = () => {
  return (
    <ul className="product__tabs grid grid-cols-3 mb-5 text-center lg:text-xl">
      {productTabs.map((tab) => (
        <ProductTabsItem key={tab.id} {...tab} />
      ))}
    </ul>
  );
};

export default ProductTabs;
