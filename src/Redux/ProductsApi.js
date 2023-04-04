// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3031/" }),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `myProduct`,
    }),
  }),
});
export const OneProductApi = createApi({
  reducerPath: "OneProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3031/" }),
  endpoints: (builder) => ({
    getOneProductByName: builder.query({
      query: (name) => `myProduct/${name}`,
    }),
  }),
});

export const { useGetproductByNameQuery } = productApi;
export const { useGetOneProductByNameQuery } = OneProductApi;
