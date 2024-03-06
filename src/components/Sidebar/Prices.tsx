import { FC } from 'react';
import SidebarCategory from './SidebarCategory';
import RangeSlider from '../../UI/RangeSlider/RangeSlider';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setActivePrice } from '../../redux/slices/filterSlice';
import { PriceValueType } from '../../../@types';

const Prices: FC = () => {
  const { activePrice } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onChangeHandler = (newValue: PriceValueType) => {
    dispatch(
      setActivePrice({
        min: newValue.min,
        max: newValue.max,
      })
    );
  };

  return (
    <SidebarCategory title="Price">
      <RangeSlider
        min={0}
        max={1000}
        step={5}
        value={activePrice}
        onChange={onChangeHandler}
      />
    </SidebarCategory>
  );
};

export default Prices;
