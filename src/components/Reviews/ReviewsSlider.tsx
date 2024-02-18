import React, { FC } from 'react';
import Slider from 'react-slick';
import { reviewsList } from '../../data/reviewsList';
import ReviewsListItem from './ReviewsListItem';

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

const ReviewsSlider: FC = () => {
  return (
    <ul className="reviews__list slider-container">
      <Slider {...settings}>
        {reviewsList.map((review) => (
          <ReviewsListItem key={review.id} {...review} />
        ))}
      </Slider>
    </ul>
  );
};

export default ReviewsSlider;
