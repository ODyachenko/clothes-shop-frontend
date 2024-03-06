import React, { FC } from 'react';
import { ProfileHookFormType } from '../../../@types';
import { useAppSelector } from '../../hooks/hooks';

const PersonalInfo: FC<ProfileHookFormType> = ({ register, errors }) => {
  const { currentUser } = useAppSelector((state) => state.user);

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              defaultValue={currentUser.first_name}
              {...register('first_name', {
                minLength: { value: 2, message: 'Min length is 2' },
                maxLength: { value: 30, message: 'Max length is 30' },
              })}
              id="first-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['first_name'] && (
              <span className="block text-red-500 pt-1">
                {errors['first_name'].message}
              </span>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              defaultValue={currentUser.last_name}
              {...register('last_name', {
                minLength: { value: 2, message: 'Min length is 2' },
                maxLength: { value: 30, message: 'Max length is 30' },
              })}
              id="last-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['last_name'] && (
              <span className="block text-red-500 pt-1">
                {errors['last_name'].message}
              </span>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              type="text"
              defaultValue={currentUser.username}
              {...register('username', {
                minLength: { value: 4, message: 'Min length is 4' },
                maxLength: { value: 30, message: 'Max length is 30' },
              })}
              id="username"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['username'] && (
              <span className="block text-red-500 pt-1">
                {errors['username'].message}
              </span>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              defaultValue={currentUser.email}
              {...register('email', {
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter valid email',
                },
              })}
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['email'] && (
              <span className="block text-red-500 pt-1">
                {errors['email'].message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
