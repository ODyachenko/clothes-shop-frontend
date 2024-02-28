import React, { FC } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { setDefaultState } from '../../../redux/slices/filterSlice';
import FilterBtn from '../../../UI/FilterBtn';
import SidebarCategory from '../SidebarCategory';
import FiltersList from './FiltersList';

const Filters: FC = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setDefaultState());
  };

  return (
    <>
      <SidebarCategory
        title="Filters"
        btn={<FilterBtn handler={onClickHandler} />}
      >
        <FiltersList />
      </SidebarCategory>
    </>
  );
};

export default Filters;
