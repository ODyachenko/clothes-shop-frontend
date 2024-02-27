import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Forms/LoginForm';
import { useAppSelector } from '../hooks/hooks';

const Login: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);

  return (
    <div className="login py-6 lg:py-14">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
