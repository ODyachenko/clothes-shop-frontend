import React, { FC } from 'react';
import { FAQList } from '../../../data/FAQList';
import ProductFAQListItem from './ProductFAQListItem';

const ProductFAQList: FC = () => {
  return (
    <ul className="list-decimal pl-5">
      {FAQList.map((item) => (
        <ProductFAQListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ProductFAQList;
