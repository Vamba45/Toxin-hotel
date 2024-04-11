import { FC } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router";

import './layout.scss';

const Layout: FC = () => {
    return (
        <>
            <Header/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </>
    )
}

export default Layout;