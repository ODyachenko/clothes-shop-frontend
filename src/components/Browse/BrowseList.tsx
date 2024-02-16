import React, { FC } from 'react';
import { browseCategories } from '../../data/browseCategories';
import BrowsListItem from './BrowsListItem';

const BrowseList: FC = () => {
  return (
    <ul className="browse_list">
      {browseCategories.map((category) => (
        <BrowsListItem key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default BrowseList;
