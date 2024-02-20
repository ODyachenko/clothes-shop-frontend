import React, { FC } from 'react';
import { navLinks } from '../../data/NavLinks';
import NavListItem from './NavListItem';

const NavList: FC = () => {
  return (
    <ul className="nav__list flex-shrink-0 flex flex-col gap-5 lg:gap-6 lg:flex-row lg:items-center ">
      {navLinks.map((link) => (
        <NavListItem key={link.id} {...link} />
      ))}
    </ul>
  );
};

export default NavList;
