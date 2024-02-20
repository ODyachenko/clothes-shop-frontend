import React, { FC } from 'react';
import { FieldType } from '../../@types';

const Field: FC<FieldType> = ({ type, label, placeholder, className }) => {
  return (
    <label className={`cursor-pointer block ${className}`}>
      <span className="block mb-2">{label}</span>
      <input
        type={type}
        className="field block w-full max-w-search-field bg-gray-100 rounded-3xl  py-4 px-4 transition-all duration-200 hover:shadow-md"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Field;
