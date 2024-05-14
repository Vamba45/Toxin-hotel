import { FC } from "react";
import { TextField } from "../textField/textField";
import Radio from "../radio/radio";
import Toggle from "../toggle/toggle";

import './registration.scss';
import { Link, useNavigate } from "react-router-dom";

const Registration : FC = () => {
    const navigate = useNavigate();

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
                        <Radio name="gender" id="gender1" labeltext="Мужчина" value="man"/>
                        <Radio name="gender" id="gender2" labeltext="Женщина" value="woman"/>
                    </div>

                    <div className="registration__datebirth">
                        <TextField inputmask="__.__.____"/>
                    </div>
                    
                    <div className="registration__entrydata">
                        <TextField placeholder='Email'/>
                        <TextField placeholder='Пароль' isPasswrod={true}/>
                    </div>

                    <Toggle labeltext="Получать спецпредложения" id="spec"/>

                    <button className='registration__submit' onClick={(e: React.MouseEvent) => {
                        const parent = (e.target as HTMLElement).closest('.registration');

                        const name = parent?.querySelector('.textField__input[placeholder="Имя"]') as HTMLInputElement;
                        const surname = parent?.querySelector('.textField__input[placeholder="Фамилия"]') as HTMLInputElement;

                        if(name.value && surname.value) {

                            localStorage.setItem("Name", name.value + " "  + surname.value);
                        }
                    }}>Перейти к оплате</button>
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