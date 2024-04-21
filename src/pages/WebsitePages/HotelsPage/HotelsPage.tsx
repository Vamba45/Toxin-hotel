import { FC } from "react";
import './HotelsPage.scss';
import Pagination from "../../../components/pagination/pagination";
import RangePicker from "../../../components/rangePicker/RangePicker";
import DropDown from "../../../components/dropdown/dropdown";
import RangeSlider from "../../../components/rangeSlider/rangeSlider";
import Checkbox from "../../../components/checkboxx/checkbox";
import CheckBoxList from "../../../components/checkboxExpandable/checkboxList";
import Room from "../../../components/room/room";

const hotelsPage: FC = () => {
    let rooms: {number: number, price: number, reviews: number, sliderItems: [], starsName: string}[] = [];

    for(let i = 0; i < 10; i++) {
        rooms.push({number: i, price: i * 1000, reviews: i * 10, sliderItems: [], starsName: `room-${i}`})
    }
 
    return (
        <div className="hotels">
            <div className="container">
                <div className="hotels__rows">
                    <div className="hotels__column hotels__filters filters">
                        <div className="filters__rangepicker">
                            <RangePicker/>
                        </div>
                        <div className="filters__guests">
                            <DropDown menuItems={["Взрослые", "Дети", "Младенцы"]}/>
                        </div>
                        <div className="filters__diapasone">
                            <RangeSlider defaultMax={15000} defaultMin={5000} maxValue={20000} priceGap={2500} title="Диапазон цены"/>
                        </div>
                        <div className="filters__checkbox-home">
                            <Checkbox id="ch1" name="home" paragraph="Можно курить"/>
                            <Checkbox id="ch2" name="home" paragraph="Можно с питомцами"/>
                            <Checkbox id="ch3" name="home" paragraph={'Можно пригласить гостей (до 10 человек)'}/>
                        </div>
                        <div className="filters__checkbox-features">
                            <Checkbox id="ch1" name="features" title="Широкий коридор" paragraph="Ширина коридоров в номере не менее 91 см"/>
                            <Checkbox id="ch2" name="features" title="Помощник для инвалидов" paragraph={'На 1 этаже вас встретит специалист и проводит до номера'}/>
                        </div>
                        <div className="filters__interier">
                            <DropDown menuItems={["Спальни", "Кровати", "Ванные комнаты"]} hasButtons={false}/>
                        </div>
                        <div className="filters__checkbox-dropdown">
                            <CheckBoxList options={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} 
                                        title="Дополнительные удобства" type="expanable"/>
                        </div>
                    </div>
                    <div className="hotels__column hotels__rooms rooms">
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
                        <div className="rooms__pagination">    
                            <Pagination pageLimit={15}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hotelsPage;