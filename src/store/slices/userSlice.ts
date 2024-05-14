import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string | null
}

const initialState : UserState = { 
    name: localStorage.getItem("Name")
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { }
})

export default userSlice.reducer;