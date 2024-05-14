import { FC } from "react";
import './Loginpage.scss';
import Login from "../../../components/login/login";
const Loginpage: FC = () => {

    return (
        <div className="loginpage">
            <div className="container">
                <div className="loginpage__form">
                    <Login/>
                </div>
            </div>
        </div>
    )
}

export default Loginpage;