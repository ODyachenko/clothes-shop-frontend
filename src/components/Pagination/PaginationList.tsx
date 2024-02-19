import React, { FC } from 'react';

const PaginationList: FC = () => {
  return (
    <ul className="pagination__pages flex items-center text-pagin-color">
      <li className="py-2 px-4 first:text-black first:bg-pagin-page rounded-lg">
        1
      </li>
      <li className="py-2 px-4">2</li>
      <li className="py-2 px-4">3</li>
      <li className="py-2 px-4">4</li>
    </ul>
  );
};

export default PaginationList;
