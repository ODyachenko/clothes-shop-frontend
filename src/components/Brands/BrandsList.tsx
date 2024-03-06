import { FC } from 'react';
import BrandsListItem from './BrandsListItem';
import BrandsSkeletonList from './BrandsSkeletonList';
import { useGetBrandsQuery } from '../../redux/API/brandsAPI';
import { BrandsType } from '../../../@types';

const BrandsList: FC = () => {
  const { data, isLoading } = useGetBrandsQuery('');

  return data ? (
    <ul className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
      {data.results.map((brand: BrandsType) => (
        <BrandsListItem key={brand.id} {...brand} />
      ))}
    </ul>
  ) : isLoading ? (
    <BrandsSkeletonList />
  ) : (
    <p>Ooops something wrong!</p>
  );
};

export default BrandsList;
