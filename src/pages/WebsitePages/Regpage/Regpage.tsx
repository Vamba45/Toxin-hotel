import { FC, useEffect } from "react";
import './Regpage.scss';
import Registration from "../../../components/registration/registration";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppSelector";
import { useNavigate } from "react-router";
import { checkUser, createUser, fetchUser } from "../../../store/reducers/ActionCreators";
import moment from "moment";

function validateRadio(name: string) {
    var radios = document.getElementsByName(name);
    var formValid = false;
    var value = "";

    var i = 0;

    while (!formValid && i < radios.length) {
        if ((radios[i] as HTMLInputElement).checked) {
            formValid = true;
            value = (radios[i] as HTMLInputElement).value;
        }
        i++;        
    }
    
    return {formValid, value}
};  

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

function isEmailValid(value: string) {
    return EMAIL_REGEXP.test(value);
}

const Regpage: FC = () => {
    const navigate = useNavigate();
    
    const {user} = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(user) {
            navigate('/hotels');
        };
    }, [user]);

    return (
        <div className="regpage">
            <div className="container">
                <div className="regpage__form">
                    <Registration submitOnClick={async (e: React.MouseEvent) => {
                        e.preventDefault();
                            
                        const parent = (e.target as HTMLElement).closest('.registration');

                        const name = parent?.querySelector('.textField__input[placeholder="Имя"]') as HTMLInputElement;
                        const surname = parent?.querySelector('.textField__input[placeholder="Фамилия"]') as HTMLInputElement;
                        
                        const date = parent?.querySelector('.textField__masked[placeholder="ДД.ММ.ГГГГ"]') as HTMLInputElement;
                        const email = parent?.querySelector('.textField__input[placeholder="Email"]') as HTMLInputElement;
                        
                        const password = parent?.querySelector('.textField__input[placeholder="Пароль"]') as HTMLInputElement;

                        let isFormCorrect = true;

                        if(!name.value) {
                            name.classList.add('error');

                            const errorBlock = (name.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите имя";

                            isFormCorrect = false;
                        }
                        
                        if(!surname.value) {
                            surname.classList.add('error');
                            
                            const errorBlock = (surname.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите фамилию";

                            isFormCorrect = false;
                        }
                        
                        if(!moment(date.value, "YYYY.MM.DD").isValid()) {
                            date.classList.add('error');
                            
                            const errorBlock = (date.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Некорректное значение";
                            
                            isFormCorrect = false;
                        }
                        
                        if(!email.value || !isEmailValid(email.value)) {
                            email.classList.add('error');
                            
                            const errorBlock = (email.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;

                            if(!isEmailValid(email.value)) {
                                errorBlock.textContent = "Некорректное значение";
                            } else {
                                errorBlock.textContent = "Введите email";
                            }

                            isFormCorrect = false;
                        }
                        
                        if(!password.value) {
                            password.classList.add('error');

                            const errorBlock = (password.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите пароль";
                            
                            isFormCorrect = false;
                        }

                        let validObj = validateRadio('gender');

                        if(!validObj.formValid) {
                            const radioError = document.querySelector('.radio__errorblock') as HTMLElement;
                            radioError.textContent = "Укажите пол";
                            
                            isFormCorrect = false;
                            e.preventDefault();
                        }
                        
                        if(isFormCorrect) {
                            const isExist = await dispatch(checkUser(email.value));

                            if(isExist) {
                                const errorBlock = (email.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                                errorBlock.textContent = "Пользователь с таким адресом уже существует";

                                return;
                            }

                            const user = {
                                email: email.value, 
                                password: password.value,
                                name: name.value,
                                surname: surname.value,
                                datebirth: new Date(date.value.split(".").reverse().join("-")),
                                gender: validObj.value === "man" ? true : false
                            };

                            await dispatch(createUser(user));
                            await dispatch(fetchUser(user.email, user.password));
                        }
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Regpage;