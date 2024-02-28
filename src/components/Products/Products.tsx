import React, { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useGetProductsQuery } from '../../redux/API/productsAPI';
import CardsList from '../Cards/CardsList';
import Pagination from '../Pagination/Pagination';
import Sorting from '../Sorting/Sorting';
import { useAppSelector } from '../../hooks/hooks';
import { QueryObj } from '../../../@types';

const Products: FC = () => {
  const {
    activeSort,
    activeCategory,
    activeColor,
    activeSize,
    activePrice,
    currentPage,
    isFilterApplied,
  } = useAppSelector((state) => state.filter);
  const [queryString, setQueryString] = useState<string>('');
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetProductsQuery(queryString);

  useEffect(() => {
    const queryObj: QueryObj = {
      ordering: activeSort,
      category: activeCategory,
      colors: activeColor,
      sizes: activeSize,
      min_price: activePrice.min,
      max_price: activePrice.max,
      page: currentPage,
    };

    const filteredQueryObj = Object.fromEntries(
      Object.entries(queryObj).filter(([_, value]) => value !== 0)
    );

    setQueryString(qs.stringify(filteredQueryObj));

    navigate(`?${queryString}`);
  }, [isFilterApplied, queryString, activeSort, currentPage]);

  return (
    <main className="products w-full">
      <div className="products__inner flex items-center justify-between mb-5">
        <h1 className="products__title font-bold text-2xl lg:text-3xl">
          Casual
        </h1>
        <div className="products__info flex items-center gap-3">
          <span className="text-text-o text-sm sm:text-base">
            Showing {data?.results.length} of {data?.count}
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
