import React, { FC } from 'react';
import { browseCategories } from '../../data/browseCategories';
import BrowsListItem from './BrowsListItem';

const BrowseList: FC = () => {
  return (
    <ul className="browse_list md:flex md:flex-wrap md:justify-center md:gap-5">
      {browseCategories.map((category) => (
        <BrowsListItem key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default BrowseList;
