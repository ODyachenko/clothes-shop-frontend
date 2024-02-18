import React, { FC } from 'react';
import { reviewsList } from '../../data/reviewsList';
import SecondaryBtn from '../../UI/SecondaryBtn';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList: FC = () => {
  return (
    <>
      <ul className="reviews__list grid grid-cols-2 gap-5 mb-5 lg:mb-9">
        {reviewsList.map((review) => (
          <ReviewsListItem key={review.id} {...review} />
        ))}
      </ul>
      <SecondaryBtn value="Load More Reviews" className="mx-auto" />
    </>
  );
};

export default ReviewsList;
