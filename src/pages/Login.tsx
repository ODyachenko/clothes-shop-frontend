import React, { FC } from 'react';
import LoginForm from '../components/Forms/LoginForm';

const Login: FC = () => {
  return (
    <div className="login py-6 lg:py-14">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
