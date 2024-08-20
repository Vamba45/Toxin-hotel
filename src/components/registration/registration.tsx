import { FC } from "react";
import { TextField } from "../textField/textField";
import Radio from "../radio/radio";
import Toggle from "../toggle/toggle";

import './registration.scss';
import { Link } from "react-router-dom";

function validateRadio(name: string) {
    var radios = document.getElementsByName(name);
    var formValid = false;

    var i = 0;

    while (!formValid && i < radios.length) {
        if ((radios[i] as HTMLInputElement).checked) formValid = true;
        i++;        
    }
    
    return formValid;
};  

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

function isEmailValid(value: string) {
    return EMAIL_REGEXP.test(value);
}

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

                    <button className='registration__submit' onClick={(e: React.MouseEvent) => {
                        const parent = (e.target as HTMLElement).closest('.registration');

                        const name = parent?.querySelector('.textField__input[placeholder="Имя"]') as HTMLInputElement;
                        const surname = parent?.querySelector('.textField__input[placeholder="Фамилия"]') as HTMLInputElement;
                        
                        const date = parent?.querySelector('.textField__masked[placeholder="ДД.ММ.ГГГГ"]') as HTMLInputElement;
                        const email = parent?.querySelector('.textField__input[placeholder="Email"]') as HTMLInputElement;
                        
                        const password = parent?.querySelector('.textField__input[placeholder="Пароль"]') as HTMLInputElement;

                        if(!name.value) {
                            name.classList.add('error');

                            const errorBlock = (name.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите имя";

                            e.preventDefault();
                        }
                        
                        if(!surname.value) {
                            surname.classList.add('error');
                            
                            const errorBlock = (surname.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите фамилию";

                            e.preventDefault();
                        }
                        
                        if(!date.value) {
                            date.classList.add('error');
                            
                            const errorBlock = (date.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите дату";
                            
                            e.preventDefault();
                        }
                        
                        if(!email.value || !isEmailValid(email.value)) {
                            email.classList.add('error');
                            
                            const errorBlock = (email.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;

                            if(!isEmailValid(email.value)) {
                                errorBlock.textContent = "Некорректное значение";
                            } else {
                                errorBlock.textContent = "Введите email";
                            }

                            e.preventDefault();
                        }
                        
                        if(!password.value) {
                            password.classList.add('error');

                            const errorBlock = (password.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите пароль";
                            
                            e.preventDefault();
                        }

                        if(!validateRadio('gender')) {
                            const radioError = document.querySelector('.radio__errorblock') as HTMLElement;
                            radioError.textContent = "Укажите пол";
                            
                            e.preventDefault();
                        }

                        if(name.value && surname.value) {

                            localStorage.setItem("Name", name.value + " "  + surname.value);
                        }
                    }}>Зарегистрироваться</button>
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