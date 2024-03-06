import { FC } from 'react';
import BrandsSkeleton from './BrandsSkeleton';

const BrandsSkeletonList: FC = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
      {new Array(8).fill('').map((_, idx) => (
        <BrandsSkeleton key={idx} />
      ))}
    </div>
  );
};

export default BrandsSkeletonList;
