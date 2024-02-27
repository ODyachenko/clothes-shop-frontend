import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import BackButton from '../../UI/BackButton';
import Btn from '../../UI/Btn';
import Field from '../../UI/Field';
import { useLoginUserMutation } from '../../redux/API/usersAPI';
import { useAppDispatch } from '../../hooks/hooks';
import { setIsAuth } from '../../redux/slices/userSlice';
import { LoginUserType } from '../../../@types';

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserType>();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [authErrors, setAuthErrors] = useState([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginUserType> = async (data) => {
    try {
      const response = await loginUser(data).then((res: any) => res);

      if (response.error) {
        throw response.error;
      }
      localStorage.setItem('token', response.data.auth_token);
      dispatch(setIsAuth(true));
      navigate('/');
    } catch (error: any) {
      console.error(error.data.non_field_errors);
      setAuthErrors(error.data.non_field_errors);
    }
  };

  return (
    <div className="max-w-card-1-lg m-auto">
      <BackButton className="m mb-2" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-white border border-solid border-border-10 rounded-2xl mb-3 p-4"
      >
        <h1 className="form__title font-integral font-bold text-2xl text-center mb-5 lg:text-3xl">
          Log in
        </h1>
        <Field
          className="mb-5"
          type="email"
          label="E-mail"
          name={'email'}
          placeholder="E-mail"
          register={{
            ...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please enter valid email',
              },
            }),
          }}
          errors={errors}
        />
        <Field
          className="mb-5"
          type="password"
          label="Password"
          name={'password'}
          placeholder="Password"
          register={{
            ...register('password', {
              required: 'This field is required',
              minLength: { value: 8, message: 'Min length is 5' },
              maxLength: { value: 40, message: 'Max length is 40' },
            }),
          }}
          errors={errors}
        />
        <Btn
          value="Sign In"
          type="submit"
          isLoading={isLoading}
          className="w-full"
        />
        {authErrors &&
          authErrors.map((error, index) => (
            <span key={index} className="block text-red-500 text-center pt-3">
              {error}
            </span>
          ))}
      </form>
      <Link className="block text-center" to="/register">
        Don't have an account?
      </Link>
    </div>
  );
};

export default LoginForm;
