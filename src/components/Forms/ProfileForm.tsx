import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserInfoType } from '../../../@types';
import { clearEmptyValues } from '../../utils/clearEmptyValues';
import PaymantInfo from '../ProfileCategories/PaymantInfo';
import PersonalInfo from '../ProfileCategories/PersonalInfo';
import ProfileActions from '../ProfileCategories/ProfileActions';
import ShipmantInfo from '../ProfileCategories/ShipmantInfo';

const ProfileForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoType>();

  const onSubmit: SubmitHandler<UserInfoType> = (data: UserInfoType) => {
    const formData = clearEmptyValues(data);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalInfo register={register} errors={errors} />
      <ShipmantInfo register={register} errors={errors} />
      <PaymantInfo register={register} errors={errors} />
      <ProfileActions />
    </form>
  );
};

export default ProfileForm;
