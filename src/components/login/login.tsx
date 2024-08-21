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

                        const email = parent?.querySelector('.textField__input[type="text"]') as HTMLInputElement;
                        const password = parent?.querySelector('.textField__input[type="password"]') as HTMLInputElement;

                        if(!email.value) {
                            email.classList.add('error');

                            const errorBlock = (email.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите email";

                            e.preventDefault();
                        }

                        if(!password.value) {
                            password.classList.add('error');

                            const errorBlock = (password.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите пароль";

                            e.preventDefault();
                        }

                        if(email.value) {

                            if(localStorage.getItem("Name")) {
                                localStorage.removeItem("Name");
                            }
                                
                            localStorage.setItem("Name", email.value);
                        }
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