import React, { FC } from 'react';
import { PriceValueType } from '../../../@types';
import RangeSlider from '../../UI/RangeSlider/RangeSlider';
import SidebarCategory from './SidebarCategory';

const Prices: FC = () => {
  const [value, setValue] = React.useState<PriceValueType>({
    min: 0,
    max: 1000,
  });

  return (
    <SidebarCategory title="Price">
      <RangeSlider
        min={0}
        max={1000}
        step={5}
        value={value}
        onChange={setValue}
      />
    </SidebarCategory>
  );
};

export default Prices;
