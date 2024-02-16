import React, { FC } from 'react';
import { navLinks } from '../../data/NavLinks';
import NavListItem from './NavListItem';

const NavList: FC = () => {
  return (
    <ul className="nav__list flex items-center gap-6">
      {navLinks.map((link) => (
        <NavListItem key={link.id} {...link} />
      ))}
    </ul>
  );
};

export default NavList;
