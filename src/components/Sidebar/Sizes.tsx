import { FC } from 'react';
import SizesList from '../Sizes/SizesList';
import SidebarCategory from './SidebarCategory';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setActiveSize } from '../../redux/slices/filterSlice';
import { productSizes } from '../../data/productSizes';

const Sizes: FC = () => {
  const { sizes } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onClickHandler = (id: number) => {
    id === sizes ? dispatch(setActiveSize(0)) : dispatch(setActiveSize(id));
  };

  return (
    <SidebarCategory title="Sizes">
      <SizesList sizes={productSizes} state={sizes} handler={onClickHandler} />
    </SidebarCategory>
  );
};

export default Sizes;
