import { FC } from 'react';
import './login.scss';

import { TextField } from '../textField/textField';
import { Link } from 'react-router-dom';

interface ILogin {
    submitOnClick?: (e: React.MouseEvent) => void;
}

const Login : FC<ILogin> = ({submitOnClick}) => {

    return (
        <form className="login">
            <div className="login__rows">
                <div className="login__column">
                    <h1 className="login__title">
                        Войти
                    </h1>
                    <TextField placeholder='Email'/>
                    <TextField placeholder='Пароль' isPasswrod={true}/>
                    <button className='login__submit' onClick={submitOnClick}>Войти</button>
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