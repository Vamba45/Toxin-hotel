import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRoom } from '../../model/IRoom';
import { ListResponse } from '../../model/IListResponce';

export const roomsAPI = createApi({
    reducerPath: 'roomsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://toxin-backend-production.up.railway.app/api'}),
    endpoints: (build) => ({
        fetchAllRooms: build.query<ListResponse<IRoom>, string>({
            query: (filter) => ({
                url: `/rooms?${filter}`
            })
        }),
        fetchOneRoom: build.query<IRoom, string>({
            query: (id) => ({
                url: `/rooms/${id}`
            })
        }),
    })
})