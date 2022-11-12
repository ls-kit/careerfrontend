import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (data) => ({
        url: "/auths/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddNewUserMutation } = apiSlice;
