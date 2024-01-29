import { FC } from "react";
import './toggle.scss';

interface IToggle {
    id: string;
    labeltext: string;
}

const Toggle: FC<IToggle> = ({id, labeltext}) => {
    return (
        <div className="toggle">
            <input className="toggle__input" type="checkbox" id={id}/>
            <label className="toggle__label" htmlFor={id}>{labeltext}</label>
        </div>
    )
}

export default Toggle;