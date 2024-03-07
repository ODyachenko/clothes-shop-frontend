import { CartType } from '../../@types';

export const calculateTotal = (list: CartType[] | any) => {
  return list.reduce((acc: number, item: CartType) => {
    return (acc += Number(item.total_price));
  }, 0);
};
