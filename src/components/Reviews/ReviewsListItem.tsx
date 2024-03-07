import { FC } from 'react';
import Rating from '../Rating/Rating';
import { ReviewType } from '../../../@types';

const ReviewsListItem: FC<ReviewType> = ({ user, rating, text, create_at }) => {
  return (
    <div className="reviews__list-item review overflow-auto rounded-3xl border border-solid border-border-10 p-6 md:h-[211px]">
      <Rating value={rating} className="mb-3" />
      <h3 className="review__author mb-3 font-bold">{`${user.first_name} ${user.last_name}`}</h3>
      <p className="review__text text-sm text-text-o mb-4 lg:text-base lg:mb-6">
        {text}
      </p>
      <span className="review__date text-text-o text-sm lg:text-base">
        Posted on {create_at}
      </span>
    </div>
  );
};

export default ReviewsListItem;
