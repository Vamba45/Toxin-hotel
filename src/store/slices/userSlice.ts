import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    surname: null,
    gender: null,
    birthDate: null,
    email: null,
    password: null,
    token: null,
    id: null,
    offers: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    }
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;