import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../model/IUser";
import { userSlice } from "./UserSlice";

export const fetchUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());

        const responce = await axios.get<IUser>(`https://toxin-backend-production.up.railway.app/user?email=${email}&password=${password}`);
        
        dispatch(userSlice.actions.usersFetchingSuccess(responce.data));
    } catch (e: any) {
        dispatch(userSlice.actions.usersFetchingError(e.message));
    }
}