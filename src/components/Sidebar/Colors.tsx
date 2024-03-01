import React, { FC } from 'react';
import ColorsList from '../Colors/ColorsList';
import SidebarCategory from './SidebarCategory';
import { useGetColorsQuery } from '../../redux/API/productsAPI';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setActiveColor } from '../../redux/slices/filterSlice';

const Colors: FC = () => {
  const { data, isLoading, error } = useGetColorsQuery('');
  const { activeColor } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === activeColor
      ? dispatch(setActiveColor(0))
      : dispatch(setActiveColor(id));
  };

  return (
    <SidebarCategory title="Colors">
      {data && (
        <ColorsList
          colors={data.results}
          state={activeColor}
          handler={onClickHandler}
        />
      )}
    </SidebarCategory>
  );
};

export default Colors;
