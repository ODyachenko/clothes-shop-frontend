import { FC } from 'react';
import { useDebounce } from 'ahooks';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useGetSearchProductsQuery } from '../../redux/API/searchAPI';
import { setSearch } from '../../redux/slices/searchSlice';
import SearchField from '../../UI/SearchField/SearchField';
import SearchList from './SearchList';

const Search: FC = () => {
  const { search } = useAppSelector((state) => state.search);
  const debouncedValue = useDebounce(search, { wait: 500 });
  const { data } = useGetSearchProductsQuery(debouncedValue, {
    skip: !debouncedValue,
  });
  const dispatch = useAppDispatch();

  const onChangeHandler = (value: string) => {
    dispatch(setSearch(value));
  };

  const onBlurHandler = () => {
    dispatch(setSearch(''));
  };

  return (
    <div className="lg:w-full lg:relative">
      <SearchField
        value={search}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {data && <SearchList list={data.results} />}
    </div>
  );
};

export default Search;
