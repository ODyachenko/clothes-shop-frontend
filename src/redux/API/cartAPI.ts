import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartType } from '../../../@types';

export const cartAPI = createApi({
  reducerPath: 'cartAPI',
  tagTypes: ['cart'],
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
    getCart: builder.query({
      query: () => `api/cart`,
      providesTags: ['cart'],
    }),
    postToCart: builder.mutation({
      query: (body: CartType) => ({
        url: `api/cart`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cart'],
    }),
    updateCartQuantity: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/cart/${id}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['cart'],
    }),
    deleteCartItem: builder.mutation({
      query: (id: number) => ({
        url: `api/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
});

export const {
  useGetCartQuery,
  usePostToCartMutation,
  useUpdateCartQuantityMutation,
  useDeleteCartItemMutation,
} = cartAPI;
