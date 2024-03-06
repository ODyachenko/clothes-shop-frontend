import { FC } from 'react';
import SidebarCategory from '../SidebarCategory';
import FiltersList from './FiltersList';
import FilterBtn from '../../../UI/FilterBtn';
import { useAppDispatch } from '../../../hooks/hooks';
import {
  setDefaultState,
  setIsFilterApplied,
} from '../../../redux/slices/filterSlice';

const Filters: FC = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setDefaultState());
    dispatch(setIsFilterApplied());
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
