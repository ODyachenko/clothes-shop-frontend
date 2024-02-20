import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../UI/BackButton';
import Btn from '../UI/Btn';
import Field from '../UI/Field';

const Login: FC = () => {
  return (
    <div className="login py-6 lg:py-14">
      <div className="container">
        <div className="max-w-card-1-lg m-auto">
          <BackButton className="m mb-2" />
          <form
            action=""
            className=" bg-white border border-solid border-border-10 rounded-2xl mb-3 p-4"
          >
            <h1 className="form__title font-integral font-bold text-2xl text-center mb-5 lg:text-3xl">
              Log in
            </h1>
            <Field
              className="mb-5"
              type="email"
              label="E-mail"
              placeholder="E-mail"
            />
            <Field
              className="mb-5"
              type="password"
              label="Password"
              placeholder="Password"
            />
            <Btn value="Sign In" type="submit" className="w-full" />
          </form>
          <Link className="block text-center" to="/register">
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
