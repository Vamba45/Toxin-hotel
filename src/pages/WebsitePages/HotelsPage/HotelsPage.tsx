import React, { FC, useRef, useState } from "react";
import './HotelsPage.scss';
import Pagination from "../../../components/pagination/pagination";
import RangePicker from "../../../components/rangePicker/RangePicker";
import DropDown from "../../../components/dropdown/dropdown";
import RangeSlider from "../../../components/rangeSlider/rangeSlider";
import Checkbox from "../../../components/checkboxx/checkbox";
import CheckBoxList from "../../../components/checkboxExpandable/checkboxList";
import Room from "../../../components/room/room";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { roomsAPI } from "../../../store/services/roomSerivce";
import RoomSkeleton from "../../../components/roomSkeleton/roomSkeleton";
import { Link } from "react-router-dom";

const hotelsPage: FC = () => {

    const btnRef = useRef(null);
    const sidebarRef = useRef(null);

    useOnClickOutside([btnRef, sidebarRef], () => sideBarOnClick());

    function sideBarOnClick (fromBtn?: boolean) {
        if(fromBtn) {
            (document.querySelector('#sidebar-btn'))?.classList.toggle('active');
            (document.querySelector('.filters') as HTMLElement)?.classList.toggle('active');
            (document.body as HTMLElement)?.classList.toggle('disabled');
        } else {
            (document.querySelector('#sidebar-btn'))?.classList.remove('active');
            (document.querySelector('.filters') as HTMLElement)?.classList.remove('active');
            (document.body as HTMLElement)?.classList.remove('disabled');
        }
    }

    const [page, setPage] = useState(1);
    const [priceDiapasone, setPriceDiapasone] = useState([5000, 15000]);
    const {data, isError, isLoading} = roomsAPI.useFetchAllRoomsQuery(page);
 
    return (
        <div className="hotels">
            <div className="container">
                <div className="hotels__rows">
                    <div className="hotels__column hotels__filters filters" ref={sidebarRef}>
                        <div className="filters__container">
                            <div className="filters__rangepicker child">
                                <RangePicker/>
                            </div>
                            <div className="filters__guests child">
                                <DropDown menuItems={[{name: "Взрослые"}, {name: "Дети"}, {name: "Младенцы"}]} placeholder="Гости" commonName="Гостей"/>
                            </div>
                            <div className="filters__diapasone child">
                                <RangeSlider defaultMax={15000} defaultMin={5000} maxValue={20000} priceGap={2500} title="Диапазон цены"/>
                            </div>
                            <div className="filters__checkbox-home child">
                                <Checkbox id="ch1" name="home" paragraph="Можно курить"/>
                                <Checkbox id="ch2" name="home" paragraph="Можно с питомцами"/>
                                <Checkbox id="ch3" name="home" paragraph={'Можно пригласить гостей (до 10 человек)'}/>
                            </div>
                            <div className="filters__checkbox-features child">
                                <Checkbox id="ch1" name="features" title="Широкий коридор" paragraph="Ширина коридоров в номере не менее 91 см"/>
                                <Checkbox id="ch2" name="features" title="Помощник для инвалидов" paragraph={'На 1 этаже вас встретит специалист и проводит до номера'}/>
                            </div>
                            <div className="filters__interier child">
                                <DropDown menuItems={[{name: "Спальни"}, {name: "Кровати"}, {name: "Ванные комнаты"}]} placeholder="Мебель" commonName="Мебели"/>
                            </div>
                            <div className="filters__checkbox-dropdown child">
                                <CheckBoxList options={["Завтрак", "Письменный стол", "Стул для кормления", "Кроватка", "Телевизор", "Шампунь"]} 
                                            title="Дополнительные удобства" type="expanable"/>
                            </div>
                        </div>
                    </div>
                    <div id="sidebar-btn" className="hotels__sidebar-btn"
                        onClick={() => sideBarOnClick(true)}
                        ref={btnRef}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="hotels__column hotels__rooms rooms">
                        <h2 className="rooms__title">Номера, которые мы для вас подобрали</h2>
                        <div className="rooms__grid">
                            {
                                isLoading && (<>
                                    {
                                        [... Array(12)].map(() => (
                                            <RoomSkeleton/>
                                          ))
                                    }
                                    </>)
                            }
                            {   
                                data && data.filter((el) => {
                                    return (el.price >= priceDiapasone[0] && el.price <= priceDiapasone[1])
                                }).map((room) => (
                                    <Link to={'/room'} onClick={() => {}}>
                                        <Room number={room.number} 
                                            price={room.price}
                                            reviews={room.reviewNumber} 
                                            sliderItems={room.photos} 
                                            starsName={room.number + room.dayStart}
                                            starsCount={5}/>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="rooms__pagination"
                            onClick={
                                (event: React.MouseEvent) => {
                                    const el = (event.target as HTMLElement);

                                    if(Number(el.innerText)) {
                                        setPage(Number(el.innerText));

                                        return;
                                    }

                                    if(el.classList.contains('pagination__dotsbefore') || 
                                        el.classList.contains('pagination__prev')) {
                                        
                                        if(page > 1) {
                                            setPage(page - 1)
                                        }

                                        return;
                                    }

                                    if(el.classList.contains('pagination__dotsafter') || 
                                        el.classList.contains('pagination__next')) {
                                        
                                        if(page < 8) {
                                            setPage(page + 1)
                                        }

                                        return;
                                    }
                                }
                            }>    
                            <Pagination pageLimit={9}/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default hotelsPage;