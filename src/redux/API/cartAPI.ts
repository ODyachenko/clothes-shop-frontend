import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartType } from '../../../@types';
import { RootState } from '../store';

export const cartAPI = createApi({
  reducerPath: 'cartAPI',
  tagTypes: ['cart'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/',
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
      query: () => `cart`,
      providesTags: ['cart'],
    }),
    postToCart: builder.mutation({
      query: (body: CartType) => ({
        url: `cart`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cart'],
    }),
    updateCartQuantity: builder.mutation({
      query: ({ id, body }) => ({
        url: `cart/${id}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['cart'],
    }),
    deleteCartItem: builder.mutation({
      query: (id: number) => ({
        url: `cart/${id}`,
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
