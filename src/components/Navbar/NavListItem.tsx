import React, { FC } from 'react';
import { NavLinksType } from '../../../@types';

const NavListItem: FC<NavLinksType> = ({ value, path }) => {
  return (
    <li className="nav__lis-item">
      <a href={path}>{value}</a>
    </li>
  );
};

export default NavListItem;
