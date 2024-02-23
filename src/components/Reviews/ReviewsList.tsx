import React, { FC } from 'react';
import { ReviewType } from '../../../@types';
import { reviewsList } from '../../data/reviewsList';
import SecondaryBtn from '../../UI/SecondaryBtn';
import ReviewsListItem from './ReviewsListItem';

type ReviewsListProps = {
  reviews: ReviewType[];
};

const ReviewsList: FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <>
      <ul className="reviews__list grid grid-cols-1 gap-5 mb-5 sm:grid-cols-2 lg:mb-9">
        {reviews.map((review) => (
          <ReviewsListItem key={review.id} {...review} />
        ))}
      </ul>
      {/* <SecondaryBtn value="Load More Reviews" className="mx-auto" /> */}
    </>
  );
};

export default ReviewsList;
