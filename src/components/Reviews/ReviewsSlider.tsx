import React, { FC } from 'react';
import Slider from 'react-slick';
import ReviewsListItem from './ReviewsListItem';
import { ReviewType } from '../../../@types';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

type ReviewsSliderProps = {
  reviewsList: ReviewType[];
};

const ReviewsSlider: FC<ReviewsSliderProps> = ({ reviewsList }) => {
  return (
    <div className="reviews__list slider-container">
      <Slider {...settings}>
        {reviewsList.map((review) => (
          <ReviewsListItem key={review.id} {...review} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
