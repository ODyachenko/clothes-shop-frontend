import React, { FC } from 'react';
import Advertising from '../components/Advertising/Advertising';
import Banner from '../components/Banner/Banner';
import Browse from '../components/Browse/Browse';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Reviews from '../components/Reviews/Reviews';
import { productsList } from '../data/productsList';

const Homepage: FC = () => {
  return (
    <Layout>
      <main className="main">
        <Header />
        <Banner />
        <Advertising
          className="border-b-2 border-gray-100 border-solid"
          title="NEW ARRIVALS"
          productsList={productsList}
        />
        <Advertising title="TOP SELLING" productsList={productsList} />
        <Browse />
        <Reviews />
      </main>
    </Layout>
  );
};

export default Homepage;
