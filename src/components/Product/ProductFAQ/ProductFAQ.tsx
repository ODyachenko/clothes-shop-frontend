import React, { FC } from 'react';
import ProductFAQList from './ProductFAQList';

const ProductFAQ: FC = () => {
  return (
    <div className="faq">
      <h2 className="faq__title text-lg font-bold mb-4">
        Frequently Asked Questions(FAQ) for Our E-commerce Website
      </h2>
      <ProductFAQList />
    </div>
  );
};

export default ProductFAQ;
