import React, { FC } from 'react';
import { FiltersType } from '../../../../@types';

const FiltersListItem: FC<FiltersType> = ({ value }) => {
  return <li className="filters__list-item mb-5 last:mb-0">{value}</li>;
};

export default FiltersListItem;
