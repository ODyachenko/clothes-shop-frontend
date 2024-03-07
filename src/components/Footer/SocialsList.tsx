import { FC } from 'react';
import SocialsListItem from './SocialsListItem';
import { socialsList } from '../../data/socialsList';

const SocialsList: FC = () => {
  return (
    <ul className="socials__list flex items-center gap-3 justify-center">
      {socialsList.map((social) => (
        <SocialsListItem key={social.id} {...social} />
      ))}
    </ul>
  );
};

export default SocialsList;
