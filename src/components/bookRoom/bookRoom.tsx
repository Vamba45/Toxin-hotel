import { FC, useState } from 'react';
import './bookRoom.scss';

import RangePicker from '../rangePicker/RangePicker';
import DropDown from '../dropdown/dropdown';

export interface IBookRoom {
    isLuxe?: boolean,
    price: number,
    number: number,
    dayStart?: string,
    dayEnd?: string,
    serviceMoney: number,
    advancedServiceMoney: number,
    dropdownValue: {name: string, count?: number}[]
}

const BookRoom : FC<IBookRoom> = ({isLuxe = true, price = 5000, number = 888, dayStart, dayEnd, serviceMoney = 100, 
    advancedServiceMoney = 250, dropdownValue
}: IBookRoom) => {
    const [minDate, setMinDate] = useState<string>(dayStart ? dayStart.replaceAll('-', '.') : "");
    const [maxDate, setMaxDate] = useState<string>(dayEnd ? dayEnd.replaceAll('-', '.') : "");

    const days: number = 
    (
        new Date(maxDate).getTime()
    -
        new Date(minDate).getTime()
    ) / (1000 * 60 * 60 * 24);

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
                    <RangePicker defaultValues={ (dayStart !== undefined && dayEnd !== undefined) ? [dayStart, dayEnd] : undefined} 
                        onChange={(dates: [string, string]) => {
                        if(dates[0] !== "") {
                            setMinDate(dates[0].split('.').reverse().join('.'));
                            setMaxDate(dates[1].split('.').reverse().join('.'));
                        }}}
                    />
                </div>
                <div className="bookroom__column">
                    <DropDown menuItems={dropdownValue} placeholder='Гости' commonName='Гостей'/>
                </div>
                <div className="bookroom__column">
                    <div className="bookroom__calculations">
                        <div className="bookroom__pay pay">
                            <div className="pay__name">{price}₽ х {days || 0} { days === 1 ? "сутки" : "суток"}</div>
                            <div className="pay__num">{(days || 0 ) * price}₽</div>
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
                                (price * (days || 0)) + serviceMoney + advancedServiceMoney
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