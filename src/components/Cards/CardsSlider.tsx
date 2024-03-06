import { FC } from 'react';
import Slider from 'react-slick';
import { ProductType } from '../../../@types';
import CardsItem from './CardsItem';

type CardListProps = {
  productsList: ProductType[];
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CardsSlider: FC<CardListProps> = ({ productsList }) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {productsList.map((prod) => (
          <CardsItem key={prod.id} {...prod} />
        ))}
      </Slider>
    </div>
  );
};

export default CardsSlider;
