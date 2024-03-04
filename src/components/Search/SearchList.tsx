import React, { FC } from 'react';
import { SearchListType } from '../../../@types';
import SearchListItem from './SearchListItem';

type SearchListProps = {
  list: SearchListType[];
};

const SearchList: FC<SearchListProps> = ({ list }) => {
  return (
    <ul className=" bg-white border border-solid border-border-10 rounded-lg shadow-card-sh  divide-y divide-solid divide-border-10 absolute top-32  left-2 right-2 lg:left-0 lg:right-0 lg:w-full lg:top-search-top">
      {list.map((item) => (
        <SearchListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default SearchList;
