import { FC } from "react";
import { TextField } from "../textField/textField";
import Radio from "../radio/radio";
import Toggle from "../toggle/toggle";

import './registration.scss';
import { Link } from "react-router-dom";

interface IRegistration {
    submitOnClick?: (e: React.MouseEvent) => void;
}

const Registration : FC<IRegistration> = ({submitOnClick}) => {
    return (
        <form action="" className="registration">
            <div className="registration__rows">
                <div className="registration__column">
                    <h1 className="registration__title">
                        Регистрация аккаунта
                    </h1>

                    <TextField placeholder='Имя'/>
                    <TextField placeholder='Фамилия'/>

                    <div className="registration__radio">
                        <div className="radio__buttons" onClick={(e) => {
                            const target =  (e.target as HTMLElement);

                            if(target.classList.contains('radio') || target.closest('.radio')) {
                                (target.closest('.registration__radio')?.querySelector('.radio__errorblock') as HTMLElement).textContent = "";
                            }
                        }}>
                            <Radio name="gender" id="gender1" labeltext="Мужчина" value="man"/>
                            <Radio name="gender" id="gender2" labeltext="Женщина" value="woman"/>
                        </div>
                        <div className="radio__errorblock"></div>
                    </div>

                    <div className="registration__datebirth">
                        <TextField inputmask="__.__.____"/>
                    </div>
                    
                    <div className="registration__entrydata">
                        <TextField placeholder='Email'/>
                        <TextField placeholder='Пароль' isPasswrod={true}/>
                    </div>

                    <Toggle labeltext="Получать спецпредложения" id="spec"/>

                    <button className='registration__submit' onClick={submitOnClick}>Зарегистрироваться</button>
                </div>
                <div className="registration__column">
                    <Link to={'/login'} className="registration__createacclink">Уже есть аккаунт на Toxin?</Link>
                    <Link to={'/login'} className="registration__createaccbutton">Войти</Link>
                </div>
            </div>
        </form>
    )
}

export default Registration;