import { FC } from "react";
import './checkbox.scss';

interface ICheckBox {
    name: string;
    id: string;
    labeltext: string;
    disabled?: boolean;
}

const Checkbox: FC<ICheckBox> = ({name, id, labeltext, disabled=false}) => {
    return (
        <div className="checkbox">
            <input className="checkbox__input" type="checkbox"  disabled={disabled} name={name} id={id}/>
            <label className="checkbox__label" htmlFor={id}>{labeltext}</label>
        </div>
    )
}

export default Checkbox;