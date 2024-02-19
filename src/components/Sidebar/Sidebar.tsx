import React, { FC } from 'react';
import Btn from '../../UI/Btn';
import Colors from './Colors';
import Filters from './Filters/Filters';
import Prices from './Prices';
import Sizes from './Sizes';

const Sidebar: FC = () => {
  return (
    <aside className="sidebar bg-white border border-solid border-border-10 rounded-2xl p-5 lg:px-6 lg:pb-8 absolute bottom-0 left-0 right-0 overflow-auto max-h-sidebar-h lg:static lg:max-h-none lg:max-w-sidebar-w">
      <Filters />
      <Prices />
      <Colors />
      <Sizes />
      <Btn className="w-full" value="Apply Filter" />
    </aside>
  );
};

export default Sidebar;
