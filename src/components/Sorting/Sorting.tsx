import React, { FC } from 'react';
import Chevron from '../../UI/Chevron';
import SortingList from './SortingList';

const Sorting: FC = () => {
  return (
    <div className="products__sorting sorting flex items-center gap-2 relative">
      <span className="text-text-o">Sort by:</span>
      {/* <SortingList /> */}
      <Chevron />
    </div>
  );
};

export default Sorting;
