import React, { FC } from 'react';
import { headerStats } from '../../data/headerStats';
import HeaderStatsItem from './HeaderStatsItem';

const HeaderStats: FC = () => {
  return (
    <ul className="header__stats flex flex-wrap justify-center gap-y-5 mb-10 md:flex-nowrap md:gap-5 lg:justify-between">
      {headerStats.map((item) => (
        <HeaderStatsItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default HeaderStats;
