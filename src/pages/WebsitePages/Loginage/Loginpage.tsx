import { FC, useEffect } from "react";
import './Loginpage.scss';
import Login from "../../../components/login/login";    
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppSelector";
import { userSlice } from "../../../store/reducers/UserSlice";
import { fetchUser } from "../../../store/reducers/ActionCreators";


const Loginpage: FC = () => {
    const navigate = useNavigate();

    const {error, user, isLoading} = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();

    return (
        <div className="loginpage">
            <div className="container">
                <div className="loginpage__form">
                    <Login submitOnClick={(e: React.MouseEvent) => {
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
                                          
                        dispatch(fetchUser(email.value, password.value));

                        navigate('/hotels');
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Loginpage;