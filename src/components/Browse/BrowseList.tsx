import { FC } from 'react';
import BrowsListItem from './BrowsListItem';
import { browseCategories } from '../../data/browseCategories';

const BrowseList: FC = () => {
  return (
    <ul className="browse_list md:flex md:flex-wrap md:justify-between md:gap-5">
      {browseCategories.map((category) => (
        <BrowsListItem key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default BrowseList;
