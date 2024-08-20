import { FC, useState } from 'react';
import './textField.scss';
import { useMask } from '@react-input/mask';

interface ITextField {
    placeholder?: string,
    inputmask?: string,
    isSubscribtion?: boolean;
    isPasswrod?: boolean;
    undertext?: string
}

const TextField: FC<ITextField> = ({placeholder, isSubscribtion = false, inputmask="", isPasswrod=false, undertext}) => {
    const maxWidth = isSubscribtion ? "267px" : "320px";

    const inputRef = useMask({ mask: inputmask, 
                            replacement: { _: /\d/  },
                            showMask: false,
                        });

    return (
        <div className="textField"
            style={{maxWidth: maxWidth,
            }}>
            { 
                isSubscribtion === false && inputmask === "" &&
                <input type={isPasswrod ? "password" : "text"} 
                    className='textField__input' 
                    placeholder={placeholder}
                    onFocus={(e) => {
                        (e.target as HTMLElement).classList.remove('error');
                        (e.target.closest('.textField')?.querySelector('.textField__errorblock') as HTMLElement).textContent = ""
                    }}/>
            }
            { 
                isSubscribtion && 
                <>
                    <input type="text" 
                        className='textField__subscribtion' 
                        placeholder={placeholder}
                        onFocus={(e) => {
                            (e.target as HTMLElement).classList.remove('error');
                        (e.target.closest('.textField')?.querySelector('.textField__errorblock') as HTMLElement).textContent = ""
                        }}/> 
                    <div className='textField__button'></div>
                </>
            }
            {
                isSubscribtion === false && inputmask !== "" && 
                <input type="text" 
                    className='textField__masked' 
                    placeholder="ДД.ММ.ГГГГ"
                    ref={inputRef}
                    onFocus={(e) => {
                        (e.target as HTMLElement).classList.remove('error');
                        (e.target.closest('.textField')?.querySelector('.textField__errorblock') as HTMLElement).textContent = ""
                    }}/>
            }

            <div className="textField__errorblock"></div>
        </div>
    )
}

export { TextField };