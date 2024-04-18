import { FC } from "react";
import './Landing.scss';
import SearchRoom from "../../../components/searchRoom/searchRoom";

const Landing: FC = () => {
    return (
        <div className="landing">
            <div className="container">
                <div className="landing__rows">
                    <div className="landing__column">
                        <SearchRoom/>
                    </div>
                    <div className="landing__column">
                        <p className="landing__text">
                            Лучшие номера для вашей работы, <br />
                            отдыха и просто вдохновения
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;