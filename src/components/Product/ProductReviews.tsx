import React, { FC, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Btn from '../../UI/Btn';
import ReviewForm from '../Forms/ReviewForm';
import ReviewsList from '../Reviews/ReviewsList';
import Sorting from '../Sorting/Sorting';

const ProductReviews: FC = () => {
  const { reviews } = useAppSelector((state) => state.product.currentProduct);
  const { isAuth } = useAppSelector((state) => state.user);
  const [isShow, setIsShow] = useState<boolean>(false);

  const onClickReviewBtn = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {reviews?.length ? (
        <div className="product__reviews">
          <div className="product__reviews-inner flex flex-wrap items-center justify-between gap-3 mb-5 lg:mb-6 sm:flex-nowrap">
            <h3 className="text-xl font-bold lg:text-2xl">
              All Reviews ({reviews ? reviews.length : 0})
            </h3>
            <div className="product__reviews-actions w-full flex items-center justify-between gap-3 sm:w-auto">
              <Sorting />
              {isAuth && (
                <Btn
                  value={isShow ? 'Hide form' : 'Write a Review'}
                  handler={onClickReviewBtn}
                  className="lg:w-40"
                />
              )}
            </div>
          </div>
          {isShow && <ReviewForm />}
          <ReviewsList reviews={reviews} />
        </div>
      ) : (
        <p className="font-bold text-center md:text-lg lg:text-2xl">
          We don't have review for this product
        </p>
      )}
    </>
  );
};

export default ProductReviews;
