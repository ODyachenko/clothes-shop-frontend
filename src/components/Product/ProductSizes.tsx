import React from 'react';
import { productSizes } from '../../data/productSizes';
import { useAppSelector } from '../../hooks/hooks';
import OptionBtn from '../../UI/OptionBtn';
import SizesList from '../Sizes/SizesList';

const ProductSizes = () => {
  const { sizes } = useAppSelector((state) => state.product.currentProduct);

  return (
    <div className="mb-6 pb-6 border-b border-solid border-border-10">
      <h3 className="f text-text-o mb-4">Choose Size</h3>
      <div className="product__sizes flex items-center gap-2 lg:gap-3 overflow-x-auto">
        {sizes && <SizesList sizes={sizes} />}
      </div>
    </div>
  );
};

export default ProductSizes;
