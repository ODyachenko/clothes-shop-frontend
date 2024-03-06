import { FC } from 'react';
import { FieldType } from '../../@types';

const Field: FC<FieldType> = ({
  type,
  label,
  name,
  className,
  register,
  errors,
}) => {
  return (
    <label className={`cursor-pointer block ${className}`}>
      <span className="block mb-2">{label}</span>
      <input
        {...register}
        type={type}
        className="field block w-full max-w-search-field bg-gray-100 rounded-lg  py-4 px-4 transition-all duration-200 hover:shadow-md"
        placeholder={label}
      />
      {errors[name] && (
        <span className="block text-red-500 pt-1">{errors[name].message}</span>
      )}
    </label>
  );
};

export default Field;
