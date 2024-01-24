import { FC } from 'react';
import './textField.scss';

interface ITextField {
    placeholder?: string,
    mask?: string,
    isSubscribtion?: boolean;
}

const TextField: FC<ITextField> = ({placeholder, isSubscribtion = false}) => {
    return (
        <div className="textField">
            { 
                isSubscribtion === false &&
                <input type="text" 
                    className='textField__input' 
                    placeholder={placeholder}/>
            }
            { 
                isSubscribtion && 
                <>
                    <input type="text" 
                        className='textField__subscribtion' 
                        placeholder={placeholder}/> 
                    <button className='textField__button'></button>
                </>
            }
        </div>
    )
}

export { TextField };