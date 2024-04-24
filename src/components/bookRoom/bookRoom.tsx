import { FC, useState } from 'react';
import './bookRoom.scss';

import RangePicker from '../rangePicker/RangePicker';
import DropDown from '../dropdown/dropdown';
import dayjs from 'dayjs';

interface IBookRoom {
    isLuxe?: boolean,
    price: number,
    number: number,
    dayStart: Date,
    dayEnd: Date,
    serviceMoney: number,
    advancedServiceMoney: number
}

const BookRoom : FC<IBookRoom> = ({isLuxe = true, price = 5000, number = 888, dayStart, dayEnd, serviceMoney = 100, 
    advancedServiceMoney = 250
}: IBookRoom) => {
    const [minDate, setMinDate] = useState<string>(`${dayStart.getDate()}.${dayStart.getMonth()}.${dayStart.getFullYear()}`);
    const [maxDate, setMaxDate] = useState<string>(`${dayEnd.getDate()}.${dayEnd.getMonth()}.${dayEnd.getFullYear()}`);

    const days: number = (new Date(Number(maxDate?.split('.')[2]),
    Number(maxDate?.split('.')[1]) - 1,
    Number(maxDate?.split('.')[0])).getTime()
    -
    new Date(Number(minDate?.split('.')[2]),
    Number(minDate?.split('.')[1]) - 1,
    Number(minDate?.split('.')[0])).getTime()
    ) / (1000 * 60 * 60 * 24) + 1;

    return (
        <form className="bookroom">
            <div className="bookroom__row">
                <div className="bookroom__column">
                    <div className="bookroom__textinfo info">
                        <div className="info__number">
                            <span className='num'>№  </span>
                            <span className='numeric'>{ number } </span>
                            {
                                isLuxe && <span className='luxe'>люкс</span>
                            }
                        </div>
                        <div className="info__price">
                            <span className='numeric'>{ price }₽</span> в сутки 
                        </div>
                    </div>
                </div>
                <div className="bookroom__column">
                    <RangePicker defaultValues={[dayjs(dayStart), dayjs(dayEnd)]} onChange={(dates: [string, string]) => {
                        if(dates[0] !== "") {
                            setMinDate(dates[0]);
                            setMaxDate(dates[1]);
                        }
                    }}/>
                </div>
                <div className="bookroom__column">
                    <DropDown menuItems={["Взрослые", "Дети", "Младенцы"]}/>
                </div>
                <div className="bookroom__column">
                    <div className="bookroom__calculations">
                        <div className="bookroom__pay pay">
                            <div className="pay__name">{price}₽ х {days} { days === 1 ? "сутки" : "суток"}</div>
                            <div className="pay__num">{days * price}₽</div>
                        </div>
                        <div className="bookroom__pay pay">
                            <div className="pay__name">Сбор за услуги</div>
                            <div className="pay__num">{serviceMoney.toString()}₽</div>
                        </div>
                        <div className="bookroom__pay pay">
                            <div className="pay__name">Сбор за дополнительные <br /> услуги</div>
                            <div className="pay__num">{advancedServiceMoney.toString()}₽</div>
                        </div>
                        <h1 className="bookroom__fullprice">
                            Итого
                            <span></span>
                            {
                                (price * days) + serviceMoney + advancedServiceMoney
                            }₽
                        </h1>
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