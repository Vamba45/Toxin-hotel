import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../model/IUser";

interface UserState {
    user: IUser | undefined,
    isLoading: boolean,
    error: string
}

const initialState: UserState = {
    user: undefined,
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer;