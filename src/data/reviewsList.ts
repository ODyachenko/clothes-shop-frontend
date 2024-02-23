import { ReviewType } from '../../@types';

export const reviewsList: ReviewType[] = [
  {
    id: 1,
    user: {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
    },
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    create_at: 'date',
  },
  {
    id: 2,
    user: {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
    },
    text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    rating: 3.4,
    create_at: 'date',
  },
  {
    id: 3,
    user: {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
    },
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 2.2,
    create_at: 'date',
  },
  {
    id: 4,
    user: {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
    },
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 4.5,
    create_at: 'date',
  },
];
