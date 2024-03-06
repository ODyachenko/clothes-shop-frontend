import { FC } from 'react';
import FiltersListItem from './FiltersListItem';
import { useGetCategoriesQuery } from '../../../redux/API/productsAPI';
import { FiltersType } from '../../../../@types';

const FiltersList: FC = () => {
  const { data } = useGetCategoriesQuery('');

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
