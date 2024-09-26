import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../model/IUser';

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://toxin-backend-production.up.railway.app'}),
    endpoints: (build) => ({
        fetchOneUser: build.query<IUser, string>({
            query: (filter) => ({
                url: `/user?${filter}`
            })
        }),
    })
})