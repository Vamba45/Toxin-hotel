import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { roomsAPI } from "./services/roomSerivce";
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
    userReducer,
    [roomsAPI.reducerPath]: roomsAPI.reducer 
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(roomsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']