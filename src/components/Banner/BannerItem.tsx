import { FC } from 'react';
import { BannerType } from '../../../@types';

const BannerItem: FC<BannerType> = ({ path, name }) => {
  return (
    <li className="banner__list-item flex-shrink-0 ">
      <img className="max-h-6 lg:max-h-none" src={path} alt={name} />
    </li>
  );
};

export default BannerItem;
