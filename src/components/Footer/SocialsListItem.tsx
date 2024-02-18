import React, { FC } from 'react';
import { SocialType } from '../../../@types';

const SocialsListItem: FC<SocialType> = ({ path, icon }) => {
  return (
    <li className="socials__list-item w-7 h-7 flex items-center justify-center rounded-full bg-white border border-solid">
      <a href={path} className="social__list-link">
        {icon}
      </a>
    </li>
  );
};

export default SocialsListItem;
