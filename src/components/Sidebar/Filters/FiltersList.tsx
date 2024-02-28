import React, { FC } from 'react';
import { FiltersType } from '../../../../@types';
import { useGetCategoriesQuery } from '../../../redux/API/productsAPI';
import FiltersListItem from './FiltersListItem';

const FiltersList: FC = () => {
  const { data, isLoading, error } = useGetCategoriesQuery('');

  return (
    <ul className="filters__list text-text-o">
      {data &&
        data.results.map((filter: FiltersType) => (
          <FiltersListItem key={filter.id} {...filter} />
        ))}
    </ul>
  );
};

export default FiltersList;
