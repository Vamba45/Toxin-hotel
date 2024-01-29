import { FC } from "react";
import './radio.scss';

interface IRadio {
    name: string;
    id: string;
    labeltext: string;
    value: string;
    disabled?: boolean;
}

const Radio: FC<IRadio> = ({name, id, labeltext, value, disabled=false}) => {
    return (
        <div className="radio">
            <input className="radio__input" type="radio" name={name} 
                    disabled={disabled}  id={id} value={value}/>
            <label className="radio__label" htmlFor={id}>{labeltext}</label>
        </div>
    )
}

export default Radio;