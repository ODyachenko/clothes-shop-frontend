import React, { FC } from 'react';
import './styles.scss';

const SearchField: FC = () => {
  return (
    <label className="nav__search search w-full max-w-96 bg-gray-100 rounded-3xl  py-4 pr-4 pl-14">
      <input type="search" placeholder="Search for products..." />
    </label>
  );
};

export default SearchField;
