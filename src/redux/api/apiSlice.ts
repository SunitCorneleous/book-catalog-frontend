import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-catalog-backend-psi.vercel.app/api/v1',
  }),
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
  }),
});

export const { useGetBooksQuery } = api;
