import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: user => ({
                url: '/users/signup',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        login: builder.mutation({
            query: user => ({
                url: '/users/login',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/users/logout',
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
        refresh: builder.query({
            query: () => '/users/current',
            invalidatesTags: ['User'],
        }),
    }),
});

export const {useRegisterMutation, useLoginMutation, useLogoutMutation, useRefreshQuery} = userApi