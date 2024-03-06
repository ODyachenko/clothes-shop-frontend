import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import BackButton from '../../UI/BackButton';
import Field from '../../UI/Field';
import Btn from '../../UI/Btn';
import { useCreateUserMutation } from '../../redux/API/usersAPI';

type Inputs = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [authError, setAuthError] = useState([]);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await createUser(data).then((res: any) => res);

      if (response.error) {
        throw response.error;
      }
      navigate('/login');
    } catch (error: any) {
      console.error(error.data);
      setAuthError(error.data.username);
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
          Register
        </h1>
        <Field
          className="mb-5"
          type="text"
          label="First Name"
          name={'first_name'}
          placeholder="First Name"
          register={{
            ...register('first_name', {
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
          name={'last_name'}
          placeholder="Last Name"
          register={{
            ...register('last_name', {
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
          label="Username"
          name={'username'}
          placeholder="Username"
          register={{
            ...register('username', {
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
              minLength: { value: 5, message: 'Min length is 8' },
              maxLength: { value: 40, message: 'Max length is 40' },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                message:
                  'Your password must have at least 8 characters, at least one number, and at least one special character',
              },
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
        <Btn
          value="Sign In"
          type="submit"
          isLoading={isLoading}
          className="w-full"
        />
        {authError &&
          authError.map((error, index) => (
            <span key={index} className="block text-red-500 text-center pt-3">
              {error}
            </span>
          ))}
      </form>
    </div>
  );
};

export default RegisterForm;
