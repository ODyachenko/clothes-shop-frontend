import { FC } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import ReviewsSlider from './ReviewsSlider';
import { useGetTopReviewsQuery } from '../../redux/API/reviewsAPI';

const Reviews: FC = () => {
  const { data } = useGetTopReviewsQuery('');

  return data ? (
    <Wrapper className="reviews">
      <h2 className="reviews__title title text-center mb-7 sm:text-left lg:mb-16">
        OUR HAPPY CUSTOMERS
      </h2>
      <ReviewsSlider reviewsList={data.results} />
    </Wrapper>
  ) : (
    <span></span>
  );
};

export default Reviews;
