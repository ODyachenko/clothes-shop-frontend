import React, { FC } from 'react';
import { ReviewType } from '../../../@types';
import Rating from '../Rating/Rating';

const ReviewsListItem: FC<ReviewType> = ({ user, rating, review }) => {
  return (
    <li className="reviews__list-item review rounded-3xl border border-solid border-border-10 p-6">
      <Rating value={rating} className="mb-3" />
      <h3 className="review__author mb-3 font-bold">{user}</h3>
      <p className="review__text text-sm text-text-o mb-4 lg:text-base lg:mb-6">
        {review}
      </p>
      <span className="review__date text-text-o text-sm lg:text-base">
        Posted on August 14, 2023
      </span>
    </li>
  );
};

export default ReviewsListItem;
