import { FC } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import { ProductType } from '../../../@types';

const CardsItem: FC<ProductType> = ({ id, name, rating, price, images }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="cards-list__item card cursor-pointer rounded-2xl hover:shadow-card-shadow lg:transition-all lg:duration-300"
    >
      <div className="card__header shadow-card-sh mb-4 p-1 rounded-2xl ">
        {images && <img className="mx-auto" src={images[0].image} alt={name} />}
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
