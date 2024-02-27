import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProfileActions from '../components/ProfileCategories/ProfileActions';
import ProfileCategories from '../components/ProfileCategories/ProfileCategories';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useAppSelector } from '../hooks/hooks';

const Profile = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate('/login');
  }, [isAuth]);

  return (
    <Layout>
      <Wrapper className="profile">
        <form>
          <ProfileCategories />
          <ProfileActions />
        </form>
      </Wrapper>
    </Layout>
  );
};

export default Profile;
