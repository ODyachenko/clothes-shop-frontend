import React, { FC } from 'react';
import Advertising from '../components/Advertising/Advertising';
import Banner from '../components/Banner/Banner';
import Browse from '../components/Browse/Browse';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Reviews from '../components/Reviews/Reviews';
import {
  useGetNewProductsQuery,
  useGetOnSaleProductsQuery,
} from '../redux/API/productsAPI';

const Homepage: FC = () => {
  const newArrivals = useGetNewProductsQuery('limit=4');
  const onSale = useGetOnSaleProductsQuery('limit=4');

  return (
    <Layout>
      <main className="main">
        <Header />
        <Banner />
        {newArrivals.data && (
          <Advertising
            className="border-b-2 border-gray-100 border-solid"
            title="NEW ARRIVALS"
            productsList={newArrivals.data.results}
            path="/new-arrivals"
          />
        )}
        {onSale.data && (
          <Advertising
            title="TOP SELLING"
            productsList={onSale.data.results}
            path="/sale"
          />
        )}
        <Browse />
        <Reviews />
      </main>
    </Layout>
  );
};

export default Homepage;
