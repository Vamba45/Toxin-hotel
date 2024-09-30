import { FC, useEffect } from "react";
import './Loginpage.scss';
import Login from "../../../components/login/login";    
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppSelector";
import { fetchUser } from "../../../store/reducers/ActionCreators";

const Loginpage: FC = () => {
    const navigate = useNavigate();

    const {user} = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(user) {
            navigate('/hotels');
        };
    }, [user]);

    return (
        <div className="loginpage">
            <div className="container">
                <div className="loginpage__form">
                    <Login submitOnClick={async (e: React.MouseEvent) => {
                        e.preventDefault();

                        const parent = (e.target as HTMLElement).closest('.login');

                        const email = parent?.querySelector('.textField__input[type="text"]') as HTMLInputElement;
                        const password = parent?.querySelector('.textField__input[type="password"]') as HTMLInputElement;

                        let isLoginCoorect = true;

                        if(!email.value) {
                            email.classList.add('error');

                            const errorBlock = (email.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите email";
                            
                            isLoginCoorect = false;
                        }

                        if(!password.value) {
                            password.classList.add('error');

                            const errorBlock = (password.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                            errorBlock.textContent = "Введите пароль";

                            isLoginCoorect = false;
                        }

                        if(isLoginCoorect) {
                            let user = await dispatch(fetchUser(email.value, password.value));
                            
                            if(!user) {
                                const errorBlock = (email.closest('.textField')?.querySelector('.textField__errorblock')) as HTMLElement;
                                errorBlock.textContent = "Пользователя с таким адресом не существует";
                            }
                        }
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Loginpage;