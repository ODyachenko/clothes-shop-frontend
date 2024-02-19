import React, { FC } from 'react';
import SidebarCategory from '../SidebarCategory';
import FiltersList from './FiltersList';

const Filters: FC = () => {
  return (
    <>
      <SidebarCategory title="Filters">
        <FiltersList />
      </SidebarCategory>
    </>
  );
};

export default Filters;
