import React, { FC } from 'react';
import ColorsList from '../Colors/ColorsList';
import SidebarCategory from './SidebarCategory';
import { useGetColorsQuery } from '../../redux/API/productsAPI';

const Colors: FC = () => {
  const { data, isLoading, error } = useGetColorsQuery('');

  return (
    <SidebarCategory title="Colors">
      {data && <ColorsList colors={data.results} />}
    </SidebarCategory>
  );
};

export default Colors;
