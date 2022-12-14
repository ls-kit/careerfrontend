import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bco.up.railway.app/api",
    // baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (data) => ({
        url: "/auths/register",
        method: "POST",
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getAllTeamList: builder.query({
      query: (type) => `/${type}/all`,
    }),
  }),
});

export const { useAddNewUserMutation, useUserLoginMutation, useGetAllTeamListQuery } = apiSlice;
