import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateUserType, LoginUserType } from '../../../@types';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/auth' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body: CreateUserType) => ({
        url: `/users/`,
        method: 'POST',
        body,
      }),
      //   invalidatesTags: ['user'],
    }),
    loginUser: builder.mutation({
      query: (body: LoginUserType) => ({
        url: '/token/login/',
        method: 'POST',
        body,
      }),
    }),
    logoutUser: builder.query({
      query: () => '/token/logout/',
    }),

    // getProductById: builder.query<string, string>({
    //   query: (id) => `products/${id}`,
    // }),
    // getNewProducts: builder.query<any | undefined, string>({
    //   query: (params) =>
    //     `products?ordering=-create_at${params ? `&${params}` : ''}`,
    // }),
    // getOnSaleProducts: builder.query<any | undefined, string>({
    //   query: (params) => `products?on_sale=true${params ? `&${params}` : ''}`,
    // }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
} = usersAPI;
