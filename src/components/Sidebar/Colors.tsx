import React, { FC } from 'react';
import ColorsList from '../Colors/ColorsList';
import SidebarCategory from './SidebarCategory';
import { useGetColorsQuery } from '../../redux/API/productsAPI';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setActiveColor } from '../../redux/slices/filterSlice';

const Colors: FC = () => {
  const { data, isLoading, error } = useGetColorsQuery('');
  const { colors } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === colors ? dispatch(setActiveColor(0)) : dispatch(setActiveColor(id));
  };

  return (
    <SidebarCategory title="Colors">
      {data && (
        <ColorsList
          colors={data.results}
          state={colors}
          handler={onClickHandler}
        />
      )}
    </SidebarCategory>
  );
};

export default Colors;
