import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsAPI = createApi({
  reducerPath: 'reviewsAPI',
  tagTypes: ['reviews'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('authorization', `Token ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => `reviews`,
      providesTags: ['reviews'],
    }),
    getReviewsById: builder.query<string, string>({
      query: (id) => `api/reviews/${id}`,
    }),
    getTopReviews: builder.query({
      query: () => `api/reviews?rating=5`,
    }),
    postReview: builder.mutation({
      query: (body) => ({
        url: `reviews`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['reviews'],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetReviewsQuery,
  useGetReviewsByIdQuery,
  useGetTopReviewsQuery,
  usePostReviewMutation,
} = reviewsAPI;
