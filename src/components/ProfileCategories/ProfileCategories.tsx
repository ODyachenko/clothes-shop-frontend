import React, { FC } from 'react';
import PaymantInfo from './PaymantInfo';
import PersonalInfo from './PersonalInfo';
import ShipmantInfo from './ShipmantInfo';

const ProfileCategories: FC = () => {
  return (
    <div className="space-y-12">
      <PersonalInfo />
      <ShipmantInfo />
      <PaymantInfo />
    </div>
  );
};

export default ProfileCategories;
