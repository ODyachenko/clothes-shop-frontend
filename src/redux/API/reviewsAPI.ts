import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsAPI = createApi({
  reducerPath: 'reviewsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => `reviews`,
    }),
    getReviewsById: builder.query<string, string>({
      query: (id) => `reviews/${id}`,
    }),
    getTopReviews: builder.query({
      query: () => `reviews?rating=5`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetReviewsQuery,
  useGetReviewsByIdQuery,
  useGetTopReviewsQuery,
} = reviewsAPI;
