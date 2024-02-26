import React, { FC, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Btn from '../../UI/Btn';
import Counter from '../../UI/Counter';
import { calculateDiscountPrice } from '../../utils/calculateDiscountPrice';
import Rating from '../Rating/Rating';
import ProductColors from './ProductColors';
import ProductSizes from './ProductSizes';

const ProductInfo: FC = () => {
  const { currentProduct } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="product__info max-w-w-600">
      <h1 className="product__title font-integral text-2xl lg:text-3xl xl:text-4xl font-bold mb-3">
        {currentProduct.name}
      </h1>
      {!!currentProduct.rating && (
        <Rating className="mb-3" value={currentProduct.rating} />
      )}
      {!!currentProduct.discount ? (
        <div className="product__price price flex items-center gap-3 mb-5">
          <strong className="price__new font-bold text-2xl lg:text-3xl">
            ${' '}
            {calculateDiscountPrice(
              currentProduct.price,
              currentProduct.discount
            )}
          </strong>
          <strong className="price__old font-bold text-price-30 text-2xl lg:text-3xl line-through">
            $ {currentProduct.price}
          </strong>
          <span className="inline-block bg-discount-bg text-red-500 rounded-3xl py-2 px-4">
            - {currentProduct.discount}%
          </span>
        </div>
      ) : (
        <div className="product__price price mb-5">
          <strong className="price__new font-bold text-2xl lg:text-3xl">
            $ {currentProduct.price}
          </strong>
        </div>
      )}
      <p className="product__description text-text-o mb-6 pb-6 border-b border-solid border-border-10">
        {currentProduct.description}
      </p>
      <ProductColors />
      <ProductSizes />
      <div className="flex items-center gap-5 mb-12">
        <Counter
          state={quantity}
          setState={setQuantity}
          maxValue={currentProduct.inventory}
        />
        <Btn value="Add to Cart" className="w-full" />
      </div>
    </div>
  );
};

export default ProductInfo;
