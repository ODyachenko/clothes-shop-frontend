import React, { FC } from 'react';
import './styles.scss';

const SearchField: FC = () => {
  return (
    <label className="nav__search search block w-full max-w-search-field bg-gray-100 rounded-3xl  py-4 pr-4 pl-14 transition-all duration-200 hover:shadow-md">
      <input
        type="search"
        className="w-full"
        placeholder="Search for products..."
      />
    </label>
  );
};

export default SearchField;
