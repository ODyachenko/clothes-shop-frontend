import React, { FC } from 'react';
import { HeaderStatsType } from '../../../@types';

const HeaderStatsItem: FC<HeaderStatsType> = ({ name, value }) => {
  return (
    <li className="header__stats-item text-center w-1/2 md:w-auto md:text-left md:pl-5 md:first:pl-0 xl:pl-8">
      <strong className="block text-2xl font-bold lg:text-4xl">{value}</strong>
      <span className="text-xs text-text-o xl:text-base">{name}</span>
    </li>
  );
};

export default HeaderStatsItem;
