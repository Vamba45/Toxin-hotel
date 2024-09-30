import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../model/IUser";
import { userSlice } from "./UserSlice";

export const fetchUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());

        const responce = await axios.get<IUser>(`https://toxin-backend-production.up.railway.app/user?email=${email}&password=${password}`);
        
        dispatch(userSlice.actions.usersFetchingSuccess(responce.data));
        
        return responce.data;
    } catch {
        dispatch(userSlice.actions.usersFetchingError("Ошибка"));
    }
}

export const checkUser = (email: string) => async (dispatch: AppDispatch) => {
    try {
        const responce = await axios.get<IUser>(`https://toxin-backend-production.up.railway.app/user?email=${email}`);
        
        return responce.data;
    } catch {
        return "Ошибка"
    }
}

export const createUser = (user: IUser) => async (dispatch: AppDispatch) => {
    try {
        const responce = await axios.post<IUser>(`https://toxin-backend-production.up.railway.app/user`, {
            name: user.name,
            surname: user.surname,
            gender: user.gender,
            birthdate: user.datebirth,
            email: user.email,
            password: user.password
        });
    } catch {
        return "Ошибка"
    }
}