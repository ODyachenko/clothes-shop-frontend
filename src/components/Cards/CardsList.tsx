import React, { FC } from 'react';
import CardsItem from './CardsItem';
import { ProductType } from '../../../@types';

type CardListProps = {
  productsList: ProductType[];
  className?: string;
  element?: React.ReactNode;
};

const CardsList: FC<CardListProps> = ({ productsList, className, element }) => {
  return (
    <>
      <div className={`cards__list mb-9 ${className}`}>
        {productsList.map((prod) => (
          <CardsItem key={prod.id} {...prod} />
        ))}
      </div>
      {element}
    </>
  );
};

export default CardsList;
