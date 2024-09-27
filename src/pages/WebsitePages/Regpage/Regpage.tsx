import { FC } from "react";
import './Regpage.scss';
import Registration from "../../../components/registration/registration";
import { useAppDispatch } from "../../../hooks/useAppSelector";
import { useNavigate } from "react-router";
import { fetchUser } from "../../../store/reducers/ActionCreators";

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

const Regpage: FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    return (
        <div className="regpage">
            <div className="container">
                <div className="regpage__form">
                    <Registration submitOnClick={(e: React.MouseEvent) => {
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
                        
                        dispatch(fetchUser(email.value, password.value));

                        navigate('/hotels');
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Regpage;