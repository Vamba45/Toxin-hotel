import { FC } from "react";
import './Regpage.scss';
import Registration from "../../../components/registration/registration";

const Regpage: FC = () => {
    return (
        <div className="regpage">
            <div className="container">
                <div className="regpage__form">
                    <Registration/>
                </div>
            </div>
        </div>
    )
}

export default Regpage;