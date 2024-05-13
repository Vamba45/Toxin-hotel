import { FC } from 'react';
import './login.scss';

import { TextField } from '../textField/textField';
import { Link } from 'react-router-dom';

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
                    <button className='login__submit' onClick={(e: React.MouseEvent) => {
                        const parent = (e.target as HTMLElement).closest('.login');
                        const email = parent?.querySelector('.textField__input') as HTMLInputElement;

                        email.value && localStorage.setItem("Name", email.value);
                    }}>Войти</button>
                </div>
                <div className="login__column">
                    <Link to={'/registration'} className="login__createacclink">Нет аккаунта на Toxin?</Link>
                    <Link to={'/registration'} className="login__createaccbutton">Создать</Link>
                </div>
            </div>
        </form>
    )
}

export default Login;