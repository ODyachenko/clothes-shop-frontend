import React, { FC } from 'react';
import Cards from 'react-credit-cards-2';
import { ProfileHookFormType } from '../../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentUser } from '../../redux/slices/userSlice';

const PaymantInfo: FC<ProfileHookFormType> = ({ register, errors }) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleInputFocus = (
    evt: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    dispatch(setCurrentUser({ ...currentUser, focus: evt.target.name }));
  };

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Payment Information
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label className="block mb-4">
            <input
              type="tel"
              placeholder="Card Number"
              onFocus={handleInputFocus}
              defaultValue={currentUser.number}
              {...register('number', {
                pattern: {
                  value: /^(?:\d{4}[ -]?){3}\d{4}$/,
                  message: 'Please enter valid card number',
                },
              })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['number'] && (
              <span className="block text-red-500 pt-1">
                {errors['number'].message}
              </span>
            )}
          </label>
          <label className="block mb-4">
            <input
              type="text"
              placeholder="Card Name"
              onFocus={handleInputFocus}
              defaultValue={currentUser.name}
              {...register('name', {
                minLength: { value: 4, message: 'Min length is 4' },
                maxLength: { value: 30, message: 'Max length is 30' },
              })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['name'] && (
              <span className="block text-red-500 pt-1">
                {errors['name'].message}
              </span>
            )}
          </label>
          <label className="block mb-4">
            <input
              type="tel"
              placeholder="Card Expired"
              onFocus={handleInputFocus}
              defaultValue={currentUser.expiry}
              {...register('expiry', {
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/(\d{2})$/,
                  message: 'Please enter valid card expiry',
                },
              })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['expiry'] && (
              <span className="block text-red-500 pt-1">
                {errors['expiry'].message}
              </span>
            )}
          </label>
          <label>
            <input
              type="number"
              placeholder="Card CVV"
              onFocus={handleInputFocus}
              defaultValue={currentUser.cvc}
              {...register('cvc', {
                pattern: {
                  value: /^\d{3}$/,
                  message: 'Please enter valid card cvv code',
                },
              })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['cvc'] && (
              <span className="block text-red-500 pt-1">
                {errors['cvc'].message}
              </span>
            )}
          </label>
        </div>
        <div className="sm:col-span-3">
          <Cards
            number={currentUser.number}
            expiry={currentUser.expiry}
            cvc={currentUser.cvc}
            name={currentUser.name}
            focused={currentUser.focus}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymantInfo;
