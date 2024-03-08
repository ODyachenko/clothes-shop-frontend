import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchListType } from '../../../@types';
import { useAppDispatch } from '../../hooks/hooks';
import { setSearch } from '../../redux/slices/searchSlice';

const SearchListItem: FC<SearchListType> = ({ id, name }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onCLickHandler = () => {
    navigate(`/products/${id}`);
    dispatch(setSearch(''));
  };

  return (
    <li
      onClick={onCLickHandler}
      className="p-3 cursor-pointer transition-all duration-300 hover:bg-search-bg"
    >
      {name}
    </li>
  );
};

export default SearchListItem;
