import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import ColorsList from '../Colors/ColorsList';

const ProductColors = () => {
  const { colors } = useAppSelector((state) => state.product.currentProduct);

  return (
    <div className="mb-6 pb-6 border-b border-solid border-border-10">
      <h3 className="f text-text-o mb-4">Select Colors</h3>
      <div className="product__colors flex items-center gap-4">
        {colors && <ColorsList colors={colors} />}
      </div>
    </div>
  );
};

export default ProductColors;
