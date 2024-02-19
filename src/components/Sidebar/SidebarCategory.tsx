import React, { FC } from 'react';

type SidebarCategoryProps = {
  children: React.ReactNode;
  title: string;
};

const SidebarCategory: FC<SidebarCategoryProps> = ({ children, title }) => {
  return (
    <div className="sidebar__category pb-4 mb-4 border-b border-solid border-border-10">
      <div className="sidebar__category-inner pb-4 mb-4 border-b border-solid border-border-10">
        <h2 className="sidebar__category-title text-xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default SidebarCategory;
