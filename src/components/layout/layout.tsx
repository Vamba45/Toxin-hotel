import { FC, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router";

import './layout.scss';
import { useAppSelector } from "../../hooks/useAppSelector";

const Layout: FC = () => {
    const {user} = useAppSelector(state => state.userReducer);

    return (
        <>
            <Header username={user ? user?.name + " " + user?.surname : undefined}/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </>
    )
}

export default Layout;