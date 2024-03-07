import { FC } from 'react';
import { FieldErrors, RegisterOptions } from 'react-hook-form';
import { ReviewFormType } from '../../@types';

type TextAreaProps = {
  name: keyof ReviewFormType;
  register: RegisterOptions<ReviewFormType, 'text'> | any;
  errors: FieldErrors<ReviewFormType>;
};

const TextArea: FC<TextAreaProps> = ({ name, register, errors }) => {
  return (
    <label className={`cursor-pointer block mb-5`}>
      <textarea
        {...register}
        className="field block w-full h-28 bg-gray-100 rounded-lg  py-4 px-4 resize-none transition-all duration-200 hover:shadow-md"
        placeholder="Review"
      />
      {errors[name] && (
        <span className="block text-red-500 pt-1">{errors[name]?.message}</span>
      )}
    </label>
  );
};

export default TextArea;
