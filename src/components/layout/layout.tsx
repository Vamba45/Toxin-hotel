import { FC, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router";

import './layout.scss';
import { useAppDispatch, useAppSelector } from "../../hooks/useAppSelector";
import { fetchUser } from "../../store/reducers/ActionCreators";

const Layout: FC = () => {
    const {user} = useAppSelector(state => state.userReducer);


    return (
        <>
            <Header username={user?.name + user?.surname}/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </>
    )
}

export default Layout;