import React, { FC } from 'react';
import { HeaderStatsType } from '../../../@types';

const HeaderStatsItem: FC<HeaderStatsType> = ({ name, value }) => {
  return (
    <li className="header__stats-item text-center w-1/2 md:w-auto md:text-left">
      <strong className="block text-2xl font-bold lg:text-4xl">{value}</strong>
      <span className="text-xs">{name}</span>
    </li>
  );
};

export default HeaderStatsItem;
