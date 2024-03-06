import { FC } from 'react';
import { brandsList } from '../../data/brandsList';
import BannerItem from './BannerItem';

const BannerList: FC = () => {
  return (
    <ul className="banner__list flex items-center justify-between gap-8 overflow-auto">
      {brandsList.map((brand) => (
        <BannerItem key={brand.id} {...brand} />
      ))}
    </ul>
  );
};

export default BannerList;
