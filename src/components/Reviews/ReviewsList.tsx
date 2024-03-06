import { FC } from 'react';
import ReviewsListItem from './ReviewsListItem';
import { ReviewType } from '../../../@types';

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
    </>
  );
};

export default ReviewsList;
