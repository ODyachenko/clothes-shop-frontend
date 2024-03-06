import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useGetUserInfoQuery } from '../redux/API/usersAPI';
import { setCurrentUser } from '../redux/slices/userSlice';
import ProfileForm from '../components/Forms/ProfileForm';

const Profile: FC = () => {
  const { data, isLoading, error } = useGetUserInfoQuery('');
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    !isAuth && navigate('/login');
  }, [isAuth]);

  useEffect(() => {
    if (data) {
      dispatch(setCurrentUser(data));
    }
  }, [data]);

  return (
    <Layout>
      <Wrapper className="profile">
        <h1 className="title mb-8">Profile</h1>
        <ProfileForm />
      </Wrapper>
    </Layout>
  );
};

export default Profile;
