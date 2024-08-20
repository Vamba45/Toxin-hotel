import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRoom } from '../../model/IRoom';
import { ListResponse } from '../../model/IListResponce';

export const roomsAPI = createApi({
    reducerPath: 'roomsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5050/api'}),
    endpoints: (build) => ({
        fetchAllRooms: build.query<ListResponse<IRoom>, string>({
            query: (filter) => ({
                url: `/rooms?${filter}`
            })
        })
    })
})