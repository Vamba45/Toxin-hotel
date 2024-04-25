import { FC } from 'react';
import './searchRoom.scss';

import RangePicker from '../rangePicker/RangePicker';
import DropDown from '../dropdown/dropdown';

const SearchRoom : FC = () => {
    return (
        <form className="searchroom">
            <div className="searchroom__rows">
                <div className="searchroom__column">
                    <h1 className='searchroom__title'>
                        Найдём номера под <br />
                        ваши желания
                    </h1>
                </div>
                <div className="searchroom__column">
                    <RangePicker/>
                </div>
                <div className="searchroom__column">
                    <DropDown menuItems={[{name: "Взрослые"}, {name: "Дети"}, {name: "Младенцы"}]} placeholder='Гости' commonName='Гостей'/>
                </div>
                <div className="searchroom__column">
                    <button className="searchroom__btn">подобрать номер</button>
                </div>
            </div>
        </form>
    )
}

export default SearchRoom;