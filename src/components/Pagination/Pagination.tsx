import React, { FC } from 'react';
import PaginationList from './PaginationList';

const Pagination: FC = () => {
  return (
    <div className="pagination pt-5 border-t border-solid border-border-10 flex items-center justify-between">
      <button className="pagination__btn text-sm py-2 px-4 border border-solid border-border-10 rounded-lg">
        Previous
      </button>
      <PaginationList />
      <button className="pagination__btn text-sm py-2 px-4 border border-solid border-border-10 rounded-lg">
        Next
      </button>
    </div>
  );
};

export default Pagination;
