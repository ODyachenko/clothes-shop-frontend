import React from 'react';
import { productColors } from '../../data/productColors';

const ProductColors = () => {
  return (
    <div className="mb-6 pb-6 border-b border-solid border-border-10">
      <h3 className="f text-text-o mb-4">Select Colors</h3>
      <div className="product__colors flex items-center gap-4">
        {productColors.map((color) => (
          <button
            key={color.id}
            className="w-9 h-9 rounded-full bg-black"
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
