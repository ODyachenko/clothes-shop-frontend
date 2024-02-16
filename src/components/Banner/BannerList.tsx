import React from 'react';
import { brandsList } from '../../data/brandsList';
import BannerItem from './BannerItem';

const BannerList = () => {
  return (
    <ul className="banner__list flex items-center justify-between">
      {brandsList.map((brand) => (
        <BannerItem key={brand.id} {...brand} />
      ))}
    </ul>
  );
};

export default BannerList;
