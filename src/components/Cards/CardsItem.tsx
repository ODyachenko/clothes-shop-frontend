import React, { FC } from 'react';
import { ProductType } from '../../../@types';
import stars from '../../assets/img/stars.png';
import Rating from '../Rating/Rating';

const CardsItem: FC<ProductType> = ({ name, rating, price, img }) => {
  return (
    <div className="cards-list__item card mx-4 lg:mx-0">
      <div className="card__header mb-4 bg-card-bg px-14 py-7 rounded-2xl">
        <img className="mx-auto" src={img} alt={name} />
      </div>
      <h3 className="card__title font-bold mb-2">{name}</h3>
      {!!rating && <Rating value={rating} className="mb-3" />}
      <span className="card__price text-xl font-bold">${price}</span>
    </div>
  );
};

export default CardsItem;
