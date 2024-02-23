import React, { FC } from 'react';
import { useGetProductsQuery } from '../../redux/API/productsAPI';
import CardsList from '../Cards/CardsList';
import Pagination from '../Pagination/Pagination';
import Sorting from '../Sorting/Sorting';

const Products: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery('');

  return (
    <main className="products">
      <div className="products__inner flex items-center justify-between mb-5">
        <h1 className="products__title font-bold text-2xl lg:text-3xl">
          Casual
        </h1>
        <div className="products__info flex items-center gap-3">
          <span className="text-text-o text-sm sm:text-base">
            Showing 10 of 100
          </span>
          <Sorting />
        </div>
      </div>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : data ? (
        <CardsList
          productsList={data.results}
          className="grid gap-5 lg:grid-cols-3"
          element={<Pagination />}
        />
      ) : null}
    </main>
  );
};

export default Products;
