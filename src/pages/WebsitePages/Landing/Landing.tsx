import { FC } from "react";
import './Landing.scss';
import SearchRoom from "../../../components/searchRoom/searchRoom";
import { useNavigate } from "react-router";

const Landing: FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="landing">
            <div className="container">
                <div className="landing__rows">
                    <div className="landing__column">
                        <SearchRoom buttonClick={(e) => {
                            const globalParent = (e.target as HTMLElement).closest('.landing');

                            const dates = globalParent?.querySelectorAll('.ant-picker-input > input');

                            const dayStart = dates ? (dates[0] as HTMLInputElement).value.split('.').reverse().join('-') : undefined;
                            const dayEnd = dates ? (dates[1] as HTMLInputElement).value.split('.').reverse().join('-') : undefined;

                            const dropdown = globalParent?.querySelectorAll('.counter__value');
                            
                            const adults = dropdown ? (dropdown[0] as HTMLInputElement).value : 0;
                            const children = dropdown ? (dropdown[1] as HTMLInputElement).value : 0;
                            const babies = dropdown ? (dropdown[2] as HTMLInputElement).value : 0;
                            
                            navigate(`hotels?${(dayStart && dayEnd) ? `dayStart=${dayStart}&dayEnd=${dayEnd}` : ""}` + 
                            `${Number(adults) > 0 ? `&adult=${adults}` : ""}` + 
                            `${Number(children) > 0 ? `&children=${children}` : ""}` +  
                            `${Number(babies) > 0 ? `&babies=${babies}` : ""}`)
                        }}/>
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