import { FC } from "react";
import './checkbox.scss';

interface ICheckBox {
    name: string;
    id: string;
    title?: string;
    paragraph: string;
    disabled?: boolean;
    onChangeFunc?: () => void;
}

const Checkbox: FC<ICheckBox> = ({name, id, title=undefined, paragraph, disabled=false, onChangeFunc}) => {
    return (
        <div className="checkbox">
            <input className="checkbox__input" type="checkbox" disabled={disabled} name={name} id={name+id} onChange={() => {
                if(onChangeFunc) { 
                    onChangeFunc();
                }
            }}/>
            <label className="checkbox__label" htmlFor={name+id}>
                <div>
                    {
                        title !== undefined && 
                        <>
                            <div className="checkbox__title">
                                {
                                    title
                                }
                            </div>
                            <div className="checkbox__paragraph">
                                {paragraph}
                            </div>
                        </>
                    }
                    {
                        title === undefined && 
                        paragraph
                    }
                </div>
            </label>
        </div>
    )
}

export default Checkbox;