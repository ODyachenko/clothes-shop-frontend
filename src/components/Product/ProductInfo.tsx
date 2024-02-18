import React, { FC } from 'react';
import Btn from '../../UI/Btn';
import Counter from '../../UI/Counter';
import Rating from '../Rating/Rating';
import ProductColors from './ProductColors';
import ProductSizes from './ProductSizes';

const ProductInfo: FC = () => {
  return (
    <div className="product__info max-w-w-600">
      <h1 className="product__title font-integral text-2xl lg:text-3xl xl:text-4xl font-bold mb-3">
        One Life Graphic T-shirt
      </h1>
      <Rating className="mb-3" value={4} />
      <div className="product__price price mb-5">
        <strong className="price__new font-bold text-2xl lg:text-3xl mr-3">
          $260
        </strong>
        <strong className="price__old font-bold text-price-30 text-2xl lg:text-3xl line-through">
          $300
        </strong>
      </div>
      <p className="product__description text-text-o mb-6 pb-6 border-b border-solid border-border-10">
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>
      <ProductColors />
      <ProductSizes />
      <div className="flex items-center gap-5 mb-12">
        <Counter state={0} setState={(value) => false} />
        <Btn value="Add to Cart" className="w-full" />
      </div>
    </div>
  );
};

export default ProductInfo;
