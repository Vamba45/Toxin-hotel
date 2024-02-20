import { FC } from 'react';
import './login.scss';

import { TextField } from '../textField/textField';

const Login : FC = () => {
    return (
        <form className="login">
            <div className="login__rows">
                <div className="login__column">
                    <h1 className="login__title">
                        Войти
                    </h1>
                    <TextField placeholder='Email'/>
                    <TextField placeholder='Пароль' isPasswrod={true}/>
                    <button className='login__submit' type='submit'>Войти</button>
                </div>
                <div className="login__column">
                    <a href="#" className="login__createacclink">Нет аккаунта на Toxin?</a>
                    <a href="#" className="login__createaccbutton">Создать</a>
                </div>
            </div>
        </form>
    )
}

export default Login;