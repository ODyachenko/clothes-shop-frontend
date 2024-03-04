import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getSearchProducts: builder.query({
      query: (query) => `products?search=${query}`,
    }),
  }),
});

export const { useGetSearchProductsQuery } = searchAPI;
