import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
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
    tagTypes: ['Contact'],
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact', 'User'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: `/contacts`,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        })
    }),
});

export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
