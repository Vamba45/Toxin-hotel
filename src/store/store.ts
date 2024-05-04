import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { roomsAPI } from "./services/roomSerivce";

const rootReducer = combineReducers({
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