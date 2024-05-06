import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRoom } from '../../model/IRoom';

export const roomsAPI = createApi({
    reducerPath: 'roomsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://65893844324d41715258975f.mockapi.io/react/hotel'}),
    endpoints: (build) => ({
        fetchAllRooms: build.query<IRoom[], number>({
            query: (page) => ({
                url: `/rooms?isLuxe=${false}`,
                params: {
                    limit: 12
                }
            })
        })
    })
})