import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    registerUser: builder.mutation({
      query: (formData) => ({
        url: "/auth/register",
        method: "POST",
        body: formData,
        headers: {
          'Content-Type': 'application/json',
          // Add any other necessary headers
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;
// export const { useRegisterUserMutation  } = authApi;
