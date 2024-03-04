import qs from 'qs';
import { IFilterState } from '../redux/slices/filterSlice';

export const createQueryObj = ({
  ordering,
  category,
  brand,
  dress_style,
  sizes,
  colors,
  activePrice,
  page,
}: IFilterState) => {
  const queryObj = {
    ordering,
    category,
    brand,
    dress_style,
    colors,
    sizes,
    min_price: activePrice.min,
    max_price: activePrice.max,
    page,
  };

  const filteredQueryObj = Object.fromEntries(
    Object.entries(queryObj).filter(([_, value]) => value !== 0)
  );

  return qs.stringify(filteredQueryObj);
};
