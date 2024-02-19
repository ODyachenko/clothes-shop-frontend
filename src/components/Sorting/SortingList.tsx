import React, { FC } from 'react';
import { sortingList } from '../../data/sortingList';
import SortingListItem from './SortingListItem';

const SortingList: FC = () => {
  return (
    <>
      <span>Price</span>
      <ul className="sorting__list bg-white px-2 pb-2 border border-solid border-border-10 rounded-xl absolute top-0 ">
        {sortingList.map((rule) => (
          <SortingListItem key={rule.id} {...rule} />
        ))}
      </ul>
    </>
  );
};

export default SortingList;
