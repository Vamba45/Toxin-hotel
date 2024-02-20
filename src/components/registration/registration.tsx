import { FC } from "react";
import { TextField } from "../textField/textField";
import Radio from "../radio/radio";
import Toggle from "../toggle/toggle";

import './registration.scss';

const Registration : FC = () => {
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

                    <button className='registration__submit' type='submit'>Перейти к оплате</button>
                </div>
                <div className="registration__column">
                    <a href="#" className="registration__createacclink">Уже есть аккаунт на Toxin?</a>
                    <a href="#" className="registration__createaccbutton">Войти</a>
                </div>
            </div>
        </form>
    )
}

export default Registration;