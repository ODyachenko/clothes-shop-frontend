import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../../../@types';
import stars from '../../assets/img/stars.png';
import Rating from '../Rating/Rating';

const CardsItem: FC<ProductType> = ({ id, name, rating, price, img }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="cards-list__item card mx-4 cursor-pointer rounded-2xl hover:shadow-card-shadow lg:transition-all lg:duration-300 lg:mx-0"
    >
      <div className="card__header mb-4 bg-card-bg px-14 py-7 rounded-2xl ">
        <img className="mx-auto" src={img} alt={name} />
      </div>
      <div className="card__footer lg:px-2 lg:pb-3">
        <h3 className="card__title font-bold mb-2 lg:text-xl">{name}</h3>
        {!!rating && <Rating value={rating} className="mb-3" />}
        <span className="card__price text-xl font-bold">${price}</span>
      </div>
    </Link>
  );
};

export default CardsItem;
