import React from 'react';
import Btn from '../../UI/Btn/Btn';
import FilterBtn from '../../UI/FilterBtn';
import ReviewsList from '../Reviews/ReviewsList';

const ProductReviews = () => {
  return (
    <div className="product__reviews">
      <div className="product__reviews-inner flex items-center justify-between mb-5 lg:mb-6">
        <h3 className="text-xl font-bold lg:text-2xl">All Reviews</h3>
        <div className="product__reviews-actions flex items-center gap-2">
          <FilterBtn />
          {/* <Btn value="Write a Review" /> */}
        </div>
      </div>
      <ReviewsList />
    </div>
  );
};

export default ProductReviews;
