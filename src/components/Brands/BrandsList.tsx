import React, { FC } from 'react';
import { BrandsType } from '../../../@types';
import { useGetBrandsQuery } from '../../redux/API/brandsAPI';
import BrandsListItem from './BrandsListItem';

const BrandsList: FC = () => {
  const { data, isLoading, error } = useGetBrandsQuery('');

  return (
    data && (
      <ul className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {data.results.map((brand: BrandsType) => (
          <BrandsListItem key={brand.id} {...brand} />
        ))}
      </ul>
    )
  );
};

export default BrandsList;
