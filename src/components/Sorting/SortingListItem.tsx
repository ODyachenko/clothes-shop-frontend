import React, { FC } from 'react';
import { SortingType } from '../../../@types';

const SortingListItem: FC<SortingType> = ({ value }) => {
  return <li className="sorting__list-item mb-1 last:mb-0">{value}</li>;
};

export default SortingListItem;
