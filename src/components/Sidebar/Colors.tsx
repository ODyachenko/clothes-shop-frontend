import { FC } from 'react';
import ColorsList from '../Colors/ColorsList';
import SidebarCategory from './SidebarCategory';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useGetColorsQuery } from '../../redux/API/productsAPI';
import { setActiveColor } from '../../redux/slices/filterSlice';

const Colors: FC = () => {
  const { data } = useGetColorsQuery('');
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
