import React, { FC } from 'react';
import { filters } from '../../../data/filters';
import FiltersListItem from './FiltersListItem';

const FiltersList: FC = () => {
  return (
    <ul className="filters__list text-text-o">
      {filters.map((filter) => (
        <FiltersListItem key={filter.id} {...filter} />
      ))}
    </ul>
  );
};

export default FiltersList;
