import { SortingType } from '../../@types';

export const sortingList: SortingType[] = [
  {
    id: 1,
    value: 'Most Popular',
    slug: '-rating',
  },
  {
    id: 2,
    value: 'Price Low to High',
    slug: 'price',
  },
  {
    id: 3,
    value: 'Price High to Low',
    slug: '-price',
  },
  {
    id: 4,
    value: 'Newest Arrivals',
    slug: '-create_at',
  },
];
