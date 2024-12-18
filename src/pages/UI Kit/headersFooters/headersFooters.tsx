import { FC } from "react";
import './headersFooters.scss';
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const HeadersFooters: FC = () => {
    return (
        <div className="headfoot">
            <Header/>
            <Footer/>
        </div>
    )
}

export default HeadersFooters;