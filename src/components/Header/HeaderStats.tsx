import React, { FC } from 'react';
import { headerStats } from '../../data/headerStats';
import HeaderStatsItem from './HeaderStatsItem';

const HeaderStats: FC = () => {
  return (
    <ul className="header__stats flex flex-wrap justify-center md:justify-start gap-y-5 mb-10 md:flex-nowrap md:gap-5 md:divide-x md:divide-solid md:divide-border-10 xl:gap-8">
      {headerStats.map((item) => (
        <HeaderStatsItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default HeaderStats;
