import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeDataAPI = createApi({
  reducerPath: "fakeDataAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
    getParticularPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetParticularPostQuery } = fakeDataAPI;
