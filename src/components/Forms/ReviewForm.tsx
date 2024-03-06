import { FC, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/hooks';
import { usePostReviewMutation } from '../../redux/API/reviewsAPI';
import { setShowReviewForm } from '../../redux/slices/reviewSlice';
import Btn from '../../UI/Btn';
import TextArea from '../../UI/TextArea';
import RatingStars from '../../UI/RatingStars';
import { ReviewFormType } from '../../../@types';

const ReviewForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormType>({ reValidateMode: 'onChange' });
  const [createReview, { isLoading }] = usePostReviewMutation();
  const [rating, setRating] = useState<number>(0);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ReviewFormType> = async (data) => {
    try {
      await createReview({ ...data, rating, product: id });
      setRating(0);
      reset();
      dispatch(setShowReviewForm(false));
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
      <RatingStars
        state={rating}
        handler={ratingChanged}
        errors={errors}
        register={{
          ...register('rating', {
            required: 'This field is required',
            min: { value: 1, message: 'Min rating is 1' },
            max: { value: 5, message: 'Max rating is 5' },
          }),
        }}
      />
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
