import { FC } from 'react';
import './room.scss';

import Slider from '../slider/slider';
import Rate from '../rate/rate';

interface IRoom {
    isLuxe?: boolean,
    price: number,
    reviews: number,
    starsCount?: number,
    activeStars?: number,
    starsName: string,
    number: number,
    sliderItems: any[]
}

const Room : FC<IRoom> = ({isLuxe = false, price, reviews, starsName, starsCount = 5, number, sliderItems, activeStars = 0}) => {
    return (
        <div className="room">
            <div className="room__slider">
                <Slider items={sliderItems}/>
            </div>
            <div className="room__info info">
                <div className="info__rows">
                    <div className="info__column">
                        <div className="info__number">
                            <span className='num'>№</span>
                            <span className='numeric'>{ number } </span>
                            {
                                isLuxe && <span className='luxe'>люкс</span>
                            }
                        </div>
                        <div className="info__price">
                            <span className='numeric'>{ price }₽</span> в сутки 
                        </div>
                    </div>
                    <div className="info__column">
                        <div className="info__rate">
                            <Rate name={starsName} starCount={5} activeStars={activeStars}/>
                        </div>
                        <a href='#' className="info__reviews">
                            <span className='numeric'>{ reviews }</span> Отзывов
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room;