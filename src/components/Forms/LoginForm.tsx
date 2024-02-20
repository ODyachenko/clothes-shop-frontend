import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import BackButton from '../../UI/BackButton';
import Btn from '../../UI/Btn';
import Field from '../../UI/Field';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
              minLength: { value: 5, message: 'Min length is 5' },
              maxLength: { value: 40, message: 'Max length is 40' },
            }),
          }}
          errors={errors}
        />
        <Btn value="Sign In" type="submit" className="w-full" />
      </form>
      <Link className="block text-center" to="/register">
        Don't have an account?
      </Link>
    </div>
  );
};

export default LoginForm;
