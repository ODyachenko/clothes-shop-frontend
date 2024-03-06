import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/API/productsAPI';
import CardsList from '../Cards/CardsList';
import Pagination from '../Pagination/Pagination';
import Sorting from '../Sorting/Sorting';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  setProductsCount,
  setShowFilterList,
} from '../../redux/slices/productSlice';
import { createQueryObj } from '../../utils/createQueryObj';
import { setDefaultState } from '../../redux/slices/filterSlice';
import CardSkelleton from '../Cards/CardSkelleton';
import SkelletonsList from '../Cards/SkelletonsList';
import FilterBtn from '../../UI/FilterBtn';

const Products: FC = () => {
  const filterObj = useAppSelector((state) => state.filter);
  const { ordering, page, isFilterApplied } = useAppSelector(
    (state) => state.filter
  );
  const [queryString, setQueryString] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetProductsQuery(queryString, {
    skip: !queryString,
  });

  useEffect(() => {
    setQueryString(createQueryObj(filterObj));
    navigate(`?${queryString}`);

    return () => {
      // dispatch(setDefaultState());
      console.log('unmount');
    };
  }, [isFilterApplied, queryString, ordering, page]);

  useEffect(() => {
    if (data) {
      dispatch(setProductsCount(data.count));
    }
  }, [data]);

  const onClickFilter = () => {
    dispatch(setShowFilterList(true));
  };

  return (
    <main className="products w-full">
      <div className="products__inner flex items-center justify-between mb-5">
        <h1 className="products__title hidden font-bold text-2xl sm:block lg:text-3xl">
          Men's Clothing
        </h1>
        <div className="products__info w-full flex items-center justify-between gap-3 sm:w-auto sm:justify-start">
          <span className="hidden text-text-o text-sm sm:block sm:text-base">
            Showing {data?.results.length} of {data?.count}
          </span>
          <Sorting />
          <FilterBtn handler={onClickFilter} />
        </div>
      </div>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <SkelletonsList className="grid gap-5 lg:grid-cols-3" />
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
