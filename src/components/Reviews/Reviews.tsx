import React, { FC } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import ReviewsList from './ReviewsList';

const Reviews: FC = () => {
  return (
    <Wrapper className="reviews">
      <h2 className="reviews__title title text-center mb-7 lg:mb-16">
        OUR HAPPY CUSTOMERS
      </h2>
      <ReviewsList />
    </Wrapper>
  );
};

export default Reviews;
