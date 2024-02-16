import React, { FC } from 'react';
import Advertising from '../Advertising/Advertising';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import { productsList } from '../../data/productsList';
import Browse from '../Browse/Browse';
import Reviews from '../Reviews/Reviews';

const Main: FC = () => {
  return (
    <main className="main">
      <Header />
      <Banner />
      <Advertising
        className="border-b border-gray-100"
        title="NEW ARRIVALS"
        productsList={productsList}
      />
      <Advertising title="TOP SELLING" productsList={productsList} />
      <Browse />
      <Reviews />
    </main>
  );
};

export default Main;
