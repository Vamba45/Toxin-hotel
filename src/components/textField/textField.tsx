import { FC, useState } from 'react';
import './textField.scss';
import { useMask } from '@react-input/mask';

interface ITextField {
    placeholder?: string,
    inputmask?: string,
    isSubscribtion?: boolean;
}

const TextField: FC<ITextField> = ({placeholder, isSubscribtion = false, inputmask=""}) => {
    const maxWidth = isSubscribtion ? "267px" : "320px";

    const inputRef = useMask({ mask: inputmask, 
                            replacement: { _: /\d/  },
                            showMask: false,
                        });

    return (
        <div className="textField"
            style={{maxWidth: maxWidth}}>
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
            {
                inputmask !== "" && 
                <input type="text" 
                    className='textField__masked' 
                    placeholder="ДД.ММ.ГГГГ"
                    ref={inputRef}/>
            }
        </div>
    )
}

export { TextField };