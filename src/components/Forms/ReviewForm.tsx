import React, { FC, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import ReactStars from 'react-stars';
import { ReviewFormType, ReviewType } from '../../../@types';
import { usePostReviewMutation } from '../../redux/API/reviewsAPI';
import Btn from '../../UI/Btn';
import TextArea from '../../UI/TextArea';

const ReviewForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormType>();
  const [createReview, { isLoading, error }] = usePostReviewMutation();
  const [rating, setRating] = useState<number>(0);
  const { id } = useParams();

  const onSubmit: SubmitHandler<ReviewFormType> = async (data) => {
    try {
      await createReview({ ...data, rating, product: id });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <form
      className="product__review-form feedback mb-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ReactStars
        className="mb-3"
        value={rating}
        count={5}
        onChange={ratingChanged}
        size={24}
        color1={'#f0f0f0'}
        color2={'#ffd700'}
      />
      <span className="block text-red-500 mb-2">Choose rating</span>
      <TextArea
        name={'text'}
        errors={errors}
        register={{
          ...register('text', {
            required: 'This field is required',
            minLength: { value: 10, message: 'Min length is 10' },
            maxLength: { value: 200, message: 'Max length is 200' },
          }),
        }}
      />
      <Btn
        value={isLoading ? <BeatLoader color="#fff" /> : 'Send'}
        type="submit"
        className="w-full max-w-52"
      />
    </form>
  );
};

export default ReviewForm;
