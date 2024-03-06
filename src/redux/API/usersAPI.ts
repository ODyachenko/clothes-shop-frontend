import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateUserType, LoginUserType } from '../../../@types';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Token ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body: CreateUserType) => ({
        url: `auth/users/`,
        method: 'POST',
        body,
      }),
      //   invalidatesTags: ['user'],
    }),
    loginUser: builder.mutation({
      query: (body: LoginUserType) => ({
        url: 'auth/token/login/',
        method: 'POST',
        body,
      }),
    }),
    logoutUser: builder.query({
      query: () => 'auth/token/logout/',
    }),
    getUserInfo: builder.query({
      query: () => 'users/me/',
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
  useGetUserInfoQuery,
} = usersAPI;
