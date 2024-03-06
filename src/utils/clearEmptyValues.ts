import { UserInfoType } from '../../@types';

export const clearEmptyValues = (obj: UserInfoType) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== '')
  );
};
