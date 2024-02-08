import { FC } from "react";
import './headersFooters.scss';
import Header from "../../../components/header/header";

const HeadersFooters: FC = () => {
    return (
        <div className="headfoot uikit">
            <Header/>
        </div>
    )
}

export default HeadersFooters;