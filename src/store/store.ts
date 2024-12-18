import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { roomsAPI } from "./services/roomSerivce";
import { userAPI } from "./services/userService";
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
    userReducer,
    [roomsAPI.reducerPath]: roomsAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(roomsAPI.middleware, userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']