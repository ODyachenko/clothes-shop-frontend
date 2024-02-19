import React, { FC } from 'react';
import { productSizes } from '../../data/productSizes';
import SizesList from '../Sizes/SizesList';
import SidebarCategory from './SidebarCategory';

const Sizes: FC = () => {
  return (
    <SidebarCategory title="Sizes">
      <SizesList sizes={productSizes} />
    </SidebarCategory>
  );
};

export default Sizes;
