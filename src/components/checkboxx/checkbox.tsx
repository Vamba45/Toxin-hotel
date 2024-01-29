import { FC } from "react";
import './checkbox.scss';

interface ICheckBox {
    name: string;
    id: string;
    labeltext: string
}

const Checkbox: FC<ICheckBox> = ({name, id, labeltext}) => {
    return (
        <div className="checkbox">
            <input className="checkbox__input" type="checkbox" name={name} id={id}/>
            <label className="checkbox__label" htmlFor={id}>{labeltext}</label>
        </div>
    )
}

export default Checkbox;