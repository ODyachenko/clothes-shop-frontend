import React, { FC } from 'react';
import { ProfileHookFormType } from '../../../@types';
import { useAppSelector } from '../../hooks/hooks';

const ShipmantInfo: FC<ProfileHookFormType> = ({ register, errors }) => {
  const { currentUser } = useAppSelector((state) => state.user);

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Shipment Information
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Ukraine</option>
              <option>Germany</option>
              <option>France</option>
              <option>Italy</option>
              <option>UK</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Street address
          </label>
          <div className="mt-2">
            <input
              type="text"
              defaultValue={currentUser.street_address}
              {...register('street_address', {
                minLength: { value: 10, message: 'Min length is 10' },
                maxLength: { value: 40, message: 'Max length is 40' },
              })}
              id="street-address"
              autoComplete="street-address"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['street_address'] && (
              <span className="block text-red-500 pt-1">
                {errors['street_address'].message}
              </span>
            )}
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              defaultValue={currentUser.city}
              {...register('city', {
                minLength: { value: 4, message: 'Min length is 4' },
                maxLength: { value: 30, message: 'Max length is 30' },
              })}
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['city'] && (
              <span className="block text-red-500 pt-1">
                {errors['city'].message}
              </span>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="region"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              defaultValue={currentUser.state}
              {...register('state', {
                minLength: { value: 3, message: 'Min length is 3' },
                maxLength: { value: 30, message: 'Max length is 30' },
              })}
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['state'] && (
              <span className="block text-red-500 pt-1">
                {errors['state'].message}
              </span>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="number"
              defaultValue={currentUser.zip_code}
              {...register('zip_code', {
                pattern: {
                  value: /^\d{5}$/,
                  message: 'Please enter valid zip code',
                },
              })}
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            {errors['zip_code'] && (
              <span className="block text-red-500 pt-1">
                {errors['zip_code'].message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmantInfo;
