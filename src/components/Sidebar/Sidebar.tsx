import { FC } from 'react';
import Colors from './Colors';
import Filters from './Filters/Filters';
import Prices from './Prices';
import Sizes from './Sizes';
import Btn from '../../UI/Btn';
import CloseBtn from '../../UI/CloseBtn';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setIsFilterApplied } from '../../redux/slices/filterSlice';
import { setShowFilterList } from '../../redux/slices/productSlice';

const Sidebar: FC = () => {
  const { showFilterList } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setIsFilterApplied());
    dispatch(setShowFilterList(false));
  };

  const onClickCloseBtn = () => {
    dispatch(setShowFilterList(false));
  };

  return (
    <aside
      className={`sidebar flex-shrink-0 bg-white border border-solid border-border-10 rounded-2xl p-5 lg:px-6 lg:pb-8 fixed ${
        showFilterList ? 'bottom-0' : '-bottom-full'
      } left-0 right-0 z-20 transition-all duration-700 ease-out overflow-auto max-h-sidebar-h lg:static lg:max-h-none lg:max-w-sidebar-w`}
    >
      <CloseBtn className="ml-auto mb-2 lg:hidden" handler={onClickCloseBtn} />
      <Filters />
      <Prices />
      <Colors />
      <Sizes />
      <Btn className="w-full" value="Apply Filter" handler={onClickHandler} />
    </aside>
  );
};

export default Sidebar;
