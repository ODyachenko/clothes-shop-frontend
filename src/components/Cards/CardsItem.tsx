import React, { FC } from 'react';
import { ProductType } from '../../../@types';
import stars from '../../assets/img/stars.png';

const CardsItem: FC<ProductType> = ({ name, rating, price, img }) => {
  return (
    <div className="cards-list__item card mx-4">
      <div className="card__header mb-4 bg-card-bg px-14 py-7 rounded-2xl">
        <img className="mx-auto" src={img} alt={name} />
      </div>
      <h3 className="card__title font-bold mb-2">{name}</h3>
      <div className="rating mb-2 flex items-center justify-between">
        <img src={stars} alt="stars" />
        <span>{rating} / 5</span>
      </div>
      <span className="card__price text-xl font-bold">${price}</span>
    </div>
  );
};

export default CardsItem;
