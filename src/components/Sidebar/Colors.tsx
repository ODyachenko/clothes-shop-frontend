import React, { FC } from 'react';
import ColorsList from '../Colors/ColorsList';
import SidebarCategory from './SidebarCategory';
import { colorsList } from '../../data/colorsList';

const Colors: FC = () => {
  return (
    <SidebarCategory title="Colors">
      <ColorsList colors={colorsList} />
    </SidebarCategory>
  );
};

export default Colors;
