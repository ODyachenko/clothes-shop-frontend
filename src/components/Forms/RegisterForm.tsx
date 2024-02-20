import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import BackButton from '../../UI/BackButton';
import Btn from '../../UI/Btn';
import Field from '../../UI/Field';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm: FC = () => {
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
          Register
        </h1>
        <Field
          className="mb-5"
          type="text"
          label="First Name"
          name={'firstName'}
          placeholder="First Name"
          register={{
            ...register('firstName', {
              required: 'This field is required',
              minLength: { value: 2, message: 'Min length is 2' },
              maxLength: { value: 30, message: 'Max length is 30' },
            }),
          }}
          errors={errors}
        />
        <Field
          className="mb-5"
          type="text"
          label="Last Name"
          name={'lastName'}
          placeholder="Last Name"
          register={{
            ...register('lastName', {
              required: 'This field is required',
              minLength: { value: 2, message: 'Min length is 2' },
              maxLength: { value: 30, message: 'Max length is 30' },
            }),
          }}
          errors={errors}
        />
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
        {/* <Field
          className="mb-5"
          type="password"
          label="Repeat password"
          name={'password'}
          placeholder="Repeat password"
          register={register}
          errors={errors}
        /> */}
        <Btn value="Sign In" type="submit" className="w-full" />
      </form>
    </div>
  );
};

export default RegisterForm;
