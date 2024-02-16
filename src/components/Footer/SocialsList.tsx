import React from 'react';
import { socialsList } from '../../data/socialsList';
import SocialsListItem from './SocialsListItem';

const SocialsList = () => {
  return (
    <ul className="socials__list flex items-center gap-3 justify-center">
      {socialsList.map((social) => (
        <SocialsListItem key={social.id} {...social} />
      ))}
    </ul>
  );
};

export default SocialsList;
