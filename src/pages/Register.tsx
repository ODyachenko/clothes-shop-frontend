import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Forms/RegisterForm';
import { useAppSelector } from '../hooks/hooks';

const Register: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);

  return (
    <div className="register py-6 lg:py-14">
      <div className="container">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
