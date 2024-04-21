import { FC } from 'react';
import './bookroom.scss';

import RangePicker from '../rangePicker/RangePicker';
import DropDown from '../dropdown/dropdown';

const BookRoom : FC = () => {
    return (
        <form className="bookroom">
            <div className="bookroom__row">
                <div className="bookroom__column">
                    <div className="bookroom__textinfo">
                        <div className="bookroom__roomnum">№</div>
                        <div className="bookroom__roomprice">{} в сутки</div>
                    </div>
                </div>
                <div className="bookroom__column">
                    <RangePicker/>
                </div>
                <div className="bookroom__column">
                    <DropDown menuItems={["Взрослые", "Дети", "Младенцы"]}/>
                </div>
                <div className="bookroom__column">
                    <div className="bookroom__calculations">
                        <div className="bookroom__day-price">{}</div>
                        <div className="bookroom__services">Сбор за услуги:</div>
                        <div className="bookroom__additional-services">Сбор за дополнительные услуги</div>
                        <div className="bookroom__fullprice">
                            Итого
                            <span></span>
                            {}₽
                        </div>
                    </div>
                </div>
                <div className="bookroom__column">
                    <button className="bookroom__btn">забронировать</button>
                </div>
            </div>
        </form>
    )
}

export default BookRoom;