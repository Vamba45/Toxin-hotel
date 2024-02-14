import { FC } from "react";
import './header.scss';

import logo from '../../assets/img/logo.svg';

interface ISubmenu {
    text: string;
    options: string[]
}

const Submenu : FC<ISubmenu> = ({text, options}) => {
    function submenuOnCLick(e: React.MouseEvent) {
        if((e.target as HTMLElement).classList.contains('submenu')) {

            (e.target as HTMLElement).classList.toggle('active')
            
        } else {
            (e.target as HTMLElement)
            .closest('.submenu')
            ?.classList
            .toggle('active')
        }
    }

    return (
        <li className="menu__item submenu" onClick={submenuOnCLick}>
            {text}
            <ul className="submenu__list">
                {
                    options.map((opt) => (
                        <li className="submenu__item">{opt}</li>
                    ))
                }
            </ul>
        </li>
    )
}

function burgerOnClick(e: React.MouseEvent) {
    const row = (e.target as HTMLElement).closest('.header__row');

    const col = row?.querySelector('.burgercol') as HTMLElement;
    const burger = row?.querySelector('.burger__button') as HTMLElement;

    burger.classList.toggle('active')
    col.classList.toggle('active')

    document.body.classList.toggle('lock');
}

const Header : FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__column">
                        <a href="#" className="header__logo">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="header__column burgercol">
                        <ul className="header__menu menu">
                            <li className="menu__item">О нас</li>
                            <Submenu text="Услуги" options={
                                ["Дополнительная уборка",
                                 "Уход за домашними животными",
                                 "Кондиционер",
                                 "Дополнительное бельё",
                                 'Табличка "не беспокоить"']
                            }/>
                            <li className="menu__item">Вакансии</li>
                            <li className="menu__item">Новости</li>
                            <Submenu text="Соглашения" options={
                                ["ИНН",
                                "Лицензия на оказание услуг",
                                "Справка из санпединстанции",
                                "Регистрационный номер ИП",
                                'Диплом о повышении квалификации']
                            }/>
                        </ul>
                    </div>
                    <div className="header__column">
                        <div className="header__buttons">
                            <button className="header__login">войти</button>
                            <button className="header__registration">зарегистрироваться</button>
                        </div>
                        <div className="header__user">
                            Юлий Цезарь
                        </div>
                    </div>
                    <div className="header__column burger">
                        <div className="burger__button" onClick={burgerOnClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;