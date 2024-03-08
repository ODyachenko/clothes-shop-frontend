import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const brandsAPI = createApi({
  reducerPath: 'brandsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ['brands'],
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => `api/brands`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBrandsQuery } = brandsAPI;
