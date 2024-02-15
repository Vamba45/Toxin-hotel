import { FC } from "react";
import './footer.scss';

import logo from '../../assets/img/logo.svg';
import { TextField } from "../textField/textField";

const Footer : FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__widgetes">
                    <div className="footer__widget widget">
                        <a href="#" className="widget__logo">
                            <img src={logo} alt="logo" />
                        </a>
                        <p className="widget__text">
                            Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
                        </p>
                    </div>
                    <div className="footer__widget widget">
                        <ul className="widget__list">
                            <li className="widget__option">Навигация</li>
                            <li className="widget__option">О нас</li>
                            <li className="widget__option">Новости</li>
                            <li className="widget__option">Служба поддержки</li>
                            <li className="widget__option">Услуги</li>
                        </ul>
                    </div>
                    <div className="footer__widget widget">
                        <ul className="widget__list">
                            <li className="widget__option">О нас</li>
                            <li className="widget__option">О сервисе</li>
                            <li className="widget__option">Наша команда</li>
                            <li className="widget__option">Вакансии</li>
                            <li className="widget__option">Инвесторы</li>
                        </ul>
                    </div>
                    <div className="footer__widget widget">
                        <ul className="widget__list">
                            <li className="widget__option">Служба поддержки</li>
                            <li className="widget__option">Соглашения</li>
                            <li className="widget__option">Сообщества</li>
                            <li className="widget__option">Связь с нами</li>
                        </ul>
                    </div>
                    <div className="footer__widget widget">
                        <div className="widget__title">Подписка</div>
                        <p className="widget__text">
                            Получайте специальные предложения и новости сервиса
                        </p>
                        <div className="widget__input">
                            <TextField placeholder="Email" isSubscribtion={true}/>
                        </div>
                    </div>
                </div>
                <div className="footer__copybar copybar">
                    <div className="copybar__text"></div>
                    <ul className="copybar__socials">
                        <li className="copybar__icon"></li>
                        <li className="copybar__icon"></li>
                        <li className="copybar__icon"></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;