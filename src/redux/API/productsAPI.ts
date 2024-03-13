import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['posts', 'post'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `api/categories`,
    }),
    getColors: builder.query({
      query: () => `api/colors`,
    }),
    getProducts: builder.query({
      query: (query) => `api/products?${query}`,
    }),
    getProductById: builder.query<string, string>({
      query: (id) => `api/products/${id}`,
      providesTags: ['post'],
    }),
    getNewProducts: builder.query<any | undefined, string>({
      query: (params) =>
        `api/products?ordering=-create_at${params ? `&${params}` : ''}`,
    }),
    getOnSaleProducts: builder.query<any | undefined, string>({
      query: (params) =>
        `api/products?on_sale=true${params ? `&${params}` : ''}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCategoriesQuery,
  useGetColorsQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetNewProductsQuery,
  useGetOnSaleProductsQuery,
} = productsAPI;
