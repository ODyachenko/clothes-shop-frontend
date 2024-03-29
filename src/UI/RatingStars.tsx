import { FC } from 'react';
import { FieldErrors, RegisterOptions } from 'react-hook-form';
import ReactStars from 'react-stars';
import { ReviewFormType } from '../../@types';

type RatingProps = {
  state: number;
  handler: (value: number) => void;
  register: RegisterOptions<ReviewFormType, 'rating'> | any;
  errors: FieldErrors<ReviewFormType>;
};

const RatingStars: FC<RatingProps> = ({ state, handler, register, errors }) => {
  return (
    <div>
      <input type="number" className="hidden" value={state} {...register} />
      <ReactStars
        className="mb-3"
        value={state}
        count={5}
        onChange={handler}
        half={false}
        size={24}
        color1={'#f0f0f0'}
        color2={'#ffd700'}
      />
      {errors['rating'] && (
        <span className="block text-red-500 mb-2">
          {errors['rating'].message}
        </span>
      )}
    </div>
  );
};

export default RatingStars;
