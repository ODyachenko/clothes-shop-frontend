import React, { FC } from 'react';
import RegisterForm from '../components/Forms/RegisterForm';

const Register: FC = () => {
  return (
    <div className="register py-6 lg:py-14">
      <div className="container">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
