import { FC } from "react";
import './HotelsPage.scss';
import Pagination from "../../../components/pagination/pagination";
import RangePicker from "../../../components/rangePicker/RangePicker";
import DropDown from "../../../components/dropdown/dropdown";
import RangeSlider from "../../../components/rangeSlider/rangeSlider";
import Checkbox from "../../../components/checkboxx/checkbox";
import CheckBoxList from "../../../components/checkboxExpandable/checkboxList";
import Room from "../../../components/room/room";

const HostelsPage: FC = () => {
    let rooms: {number: number, price: number, reviews: number, sliderItems: [], starsName: string}[] = [];

    for(let i = 0; i < 10; i++) {
        rooms.push({number: i, price: i * 1000, reviews: i * 10, sliderItems: [], starsName: `room-${i}`})
    }
 
    return (
        <div className="hostels">
            <div className="container">
                <div className="hostels__rows">
                    <div className="hostels__column hostels__filters filters">
                        <RangePicker/>
                        <DropDown menuItems={["Взрослые", "Дети", "Младенцы"]}/>
                        <RangeSlider defaultMax={10000} defaultMin={5000} maxValue={20000} priceGap={2500} title="Диапазон цены"/>
                        <div className="filters__checkbox-list">
                            <Checkbox id="ch1" name="home" paragraph="Можно курить"/>
                            <Checkbox id="ch2" name="home" paragraph="Можно с питомцами"/>
                            <Checkbox id="ch3" name="home" paragraph={'Можно пригласить гостей (до 10 человек)'}/>
                        </div>
                        <div className="filters__checkbox-list">
                            <Checkbox id="ch1" name="features" title="Широкий коридор" paragraph="Ширина коридоров в номере не менее 91 см"/>
                            <Checkbox id="ch2" name="features" title="Помощник для инвалидов" paragraph={'На 1 этаже вас встретит специалист и проводит до номера'}/>
                        </div>
                        <DropDown menuItems={["Спальни", "Кровати", "Ванные комнаты"]} hasButtons={false}/>
                        <CheckBoxList options={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} title="Дополнительные удобства" type="expanable"/>
                    </div>
                    <div className="hostels__column hostels__rooms rooms">
                        <h2 className="rooms__title">Номера, которые мы для вас подобрали</h2>
                        <div className="rooms__grid">
                            {   
                                rooms.map((room) => (
                                    <Room number={room.number} 
                                        price={room.price}
                                        reviews={room.reviews} 
                                        sliderItems={room.sliderItems} 
                                        starsName={room.starsName}
                                        starsCount={5}/>
                                ))
                            }
                        </div>
                        <Pagination pageLimit={15}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostelsPage;