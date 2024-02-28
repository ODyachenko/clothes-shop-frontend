import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setIsFilterApplied } from '../../redux/slices/filterSlice';
import Btn from '../../UI/Btn';
import Colors from './Colors';
import Filters from './Filters/Filters';
import Prices from './Prices';
import Sizes from './Sizes';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setIsFilterApplied());
  };

  return (
    <aside className="sidebar flex-shrink-0 bg-white border border-solid border-border-10 rounded-2xl p-5 lg:px-6 lg:pb-8 absolute bottom-0 left-0 right-0 overflow-auto max-h-sidebar-h lg:static lg:max-h-none lg:max-w-sidebar-w">
      <Filters />
      <Prices />
      <Colors />
      <Sizes />
      <Btn className="w-full" value="Apply Filter" handler={onClickHandler} />
    </aside>
  );
};

export default Sidebar;
