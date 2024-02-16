import React from 'react';
import { productSizes } from '../../data/productSizes';
import OptionBtn from '../../UI/OptionBtn';

const ProductSizes = () => {
  return (
    <div className="mb-6 pb-6 border-b border-solid border-border-10">
      <h3 className="f text-text-o mb-4">Choose Size</h3>
      <div className="product__sizes flex items-center gap-2 lg:gap-3 overflow-x-auto">
        {productSizes.map((size) => (
          <OptionBtn key={size.id} value={size.value} />
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
