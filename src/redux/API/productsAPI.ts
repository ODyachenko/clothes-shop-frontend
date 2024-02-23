import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query<string, string>({
      query: (id) => `products/${id}`,
    }),
    getNewProducts: builder.query<any | undefined, string>({
      query: (params) =>
        `products?ordering=-create_at${params ? `&${params}` : ''}`,
    }),
    getOnSaleProducts: builder.query<any | undefined, string>({
      query: (params) => `products?on_sale=true${params ? `&${params}` : ''}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetNewProductsQuery,
  useGetOnSaleProductsQuery,
} = productsAPI;
