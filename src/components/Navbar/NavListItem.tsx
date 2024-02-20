import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinksType } from '../../../@types';

const NavListItem: FC<NavLinksType> = ({ value, path }) => {
  return (
    <li className="nav__list-item">
      <NavLink to={path}>{value}</NavLink>
    </li>
  );
};

export default NavListItem;
