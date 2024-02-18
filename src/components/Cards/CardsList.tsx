import React, { FC } from 'react';
import Slider from 'react-slick';
import { ProductType } from '../../../@types';
import SecondaryBtn from '../../UI/SecondaryBtn';
import CardsItem from './CardsItem';

type CardListProps = {
  productsList: ProductType[];
};

const CardsList: FC<CardListProps> = ({ productsList }) => {
  return (
    <>
      <div className="cards__list grid grid-rows-1 grid-cols-4 gap-5 mb-9">
        {productsList.map((prod) => (
          <CardsItem key={prod.id} {...prod} />
        ))}
      </div>
      <SecondaryBtn value="View All" className="w-56 mx-auto" />
    </>
  );
};

export default CardsList;
