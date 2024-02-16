import React, { FC } from 'react';
import { ReviewType } from '../../../@types';

const ReviewsListItem: FC<ReviewType> = ({ user, rating, review }) => {
  return (
    <li className="reviews__list-item review rounded-3xl border border-solid border-border-10 p-6 mx-1 md:mx-2 lg:mx-3">
      <span className="review__rating block mb-3">{rating}</span>
      <h3 className="review__author mb-3 font-bold">{user}</h3>
      <p className="review__text text-sm text-text-o">{review}</p>
    </li>
  );
};

export default ReviewsListItem;
