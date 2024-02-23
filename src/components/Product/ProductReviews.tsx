import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Btn from '../../UI/Btn';
import FilterBtn from '../../UI/FilterBtn';
import ReviewsList from '../Reviews/ReviewsList';
import Sorting from '../Sorting/Sorting';

const ProductReviews = () => {
  const { reviews } = useAppSelector((state) => state.product.currentProduct);

  return (
    <div className="product__reviews">
      <div className="product__reviews-inner flex flex-wrap items-center justify-between gap-3 mb-5 lg:mb-6 sm:flex-nowrap">
        <h3 className="text-xl font-bold lg:text-2xl">
          All Reviews ({reviews ? reviews.length : 0})
        </h3>
        <div className="product__reviews-actions w-full flex items-center justify-between gap-3 sm:w-auto">
          <Sorting />
          <Btn value="Write a Review" className="lg:w-40" />
        </div>
      </div>
      {reviews?.length ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>You don't have any review</p>
      )}
    </div>
  );
};

export default ProductReviews;
