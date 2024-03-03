import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const brandsAPI = createApi({
  reducerPath: 'brandsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  tagTypes: ['brands'],
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => `brands`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBrandsQuery } = brandsAPI;
