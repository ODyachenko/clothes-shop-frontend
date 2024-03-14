import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/API/productsAPI';
import CardsList from '../Cards/CardsList';
import Pagination from '../Pagination/Pagination';
import Sorting from '../Sorting/Sorting';
import SkelletonsList from '../Cards/SkelletonsList';
import FilterBtn from '../../UI/FilterBtn';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  setProductsCount,
  setShowFilterList,
} from '../../redux/slices/productSlice';
import { createQueryObj } from '../../utils/createQueryObj';

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

  // If you need filter products after change filter item add filterObj to useEffect dependecies
  useEffect(() => {
    setQueryString(createQueryObj(filterObj));
    navigate(`?${queryString}`);

    return () => {
      // dispatch(setDefaultState());
      console.log('unmount');
    };
  }, [isFilterApplied, queryString, ordering, page, navigate]);

  useEffect(() => {
    if (data) {
      dispatch(setProductsCount(data.count));
    }
  }, [data, dispatch]);

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
          <FilterBtn handler={onClickFilter} className={'lg:hidden'} />
          <Sorting />
        </div>
      </div>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <SkelletonsList className="grid gap-5 lg:grid-cols-3" />
      ) : data ? (
        <CardsList
          productsList={data.results}
          className="min-[480px]:grid gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3"
          element={<Pagination />}
        />
      ) : null}
    </main>
  );
};

export default Products;
