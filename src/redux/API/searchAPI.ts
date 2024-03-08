import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getSearchProducts: builder.query({
      query: (query) => `api/products?search=${query}`,
    }),
  }),
});

export const { useGetSearchProductsQuery } = searchAPI;
