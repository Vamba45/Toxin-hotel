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
import useDebounce from "../../../hooks/useDebounce";

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
    const {data, isError, isLoading} = roomsAPI.useFetchAllRoomsQuery("");

    // FILTERS CHECKBOX

    const [canSmoke, setCanSmoke] = useState(true);
    const [pets, setPets] = useState(true);
    const [guests, setGuests] = useState(true);
    
    const [coridor, setCoridor] = useState(true);
    const [assistant, setAssistant] = useState(true);
    
    const [breakfast, setbreakfast] = useState(true);
    const [desk, setDesk] = useState(true);
    const [highChair, setHighChair] = useState(true);
    const [babyCrib, setbabyCrib] = useState(true);
    const [TV, setTV] = useState(true);
    const [champoo, setChampoo] = useState(true);

    // FILTERS DROPDOWN

    const [parents, setParents] = useState<Number>(0);
    const [children, setChildren] = useState<Number>(0);
    const [babies, setBabies] = useState<Number>(0);  
    
    const [bedrooms, setBedrooms] = useState<Number>(0);
    const [beds, setBeds] = useState<Number>(0);
    const [bathrooms, setBathrooms] = useState<Number>(0);  

    //DATE FILTER

    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    //PRICE FILTER

    const [minPrice, setMinPrice] = useState(5000);
    const debouncedMinPrice = useDebounce(setMinPrice, 500);

    const [maxPrice, setMaxPrice] = useState(15000);
    const debouncedMaxPrice = useDebounce(setMaxPrice, 500);

    const pageCount = 12;
    let totalCount = data?.length;

    const paginationRef = useRef(null);
 
    return (
        <div className="hotels">
            <div className="container">
                <div className="hotels__rows">
                    <div className="hotels__column hotels__filters filters" ref={sidebarRef}>
                        <div className="filters__container">
                            <div className="filters__rangepicker child">
                                <RangePicker onChange={(date) => {
                                    setDateStart(date[0]);
                                    setDateEnd(date[1]);
                                }}/>
                            </div>
                            <div className="filters__guests child">
                                <DropDown menuItems={[{name: "Взрослые", setStateFunc: setParents}, {name: "Дети", setStateFunc: setChildren}, {name: "Младенцы", setStateFunc: setBabies}]} 
                                            placeholder="Гости" commonName="Гостей"/>
                            </div>
                            <div className="filters__diapasone child">
                                <RangeSlider defaultMax={15000} defaultMin={500} maxValue={20000} priceGap={2500} title="Диапазон цены" 
                                onMaxChange={debouncedMaxPrice} 
                                onMinChange={debouncedMinPrice}/>
                            </div>
                            <div className="filters__checkbox-home child">
                                <Checkbox id="ch1" name="home" paragraph="Можно курить" onChangeFunc={() => {
                                    setCanSmoke(!canSmoke);
                                }}/>
                                <Checkbox id="ch2" name="home" paragraph="Можно с питомцами" onChangeFunc={() => {
                                    setPets(!pets);
                                }}/>
                                <Checkbox id="ch3" name="home" paragraph={'Можно пригласить гостей (до 10 человек)'} onChangeFunc={() => {
                                    setGuests(!guests);
                                }}/>
                            </div>
                            <div className="filters__checkbox-features child">
                                <Checkbox id="ch1" name="features" title="Широкий коридор" paragraph="Ширина коридоров в номере не менее 91 см" onChangeFunc={() => {
                                    setCoridor(!coridor);
                                }}/>
                                <Checkbox id="ch2" name="features" title="Помощник для инвалидов" paragraph={'На 1 этаже вас встретит специалист и проводит до номера'} onChangeFunc={() => {
                                    setAssistant(!assistant);
                                }}/>
                            </div>
                            <div className="filters__interier child">
                                <DropDown menuItems={[{name: "Спальни", setStateFunc: setBedrooms}, {name: "Кровати", setStateFunc: setBeds}, {name: "Ванные комнаты", setStateFunc: setBathrooms}]} placeholder="Мебель" commonName="Мебели"/>
                            </div>
                            <div className="filters__checkbox-dropdown child">
                                <CheckBoxList options={[
                                                {name: "Завтрак", checkFunc: () => setbreakfast(!breakfast) }, 
                                                {name: "Письменный стол", checkFunc: () => setDesk(!desk) }, 
                                                {name: "Стул для кормления", checkFunc: () => setHighChair(!highChair) }, 
                                                {name: "Кроватка", checkFunc: () => setbabyCrib(!babyCrib) }, 
                                                {name: "Телевизор", checkFunc: () => setTV(!TV) }, 
                                                {name: "Шампунь", checkFunc: () => setChampoo(!champoo) }
                                            ]} 
                                            
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
                        <h2 className="rooms__title">
                            Номера, которые мы для Вас подобрали
                        </h2>
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
                                    if(el.price >= minPrice && el.price <= maxPrice) {
                                        return (el.price >= minPrice && el.price <= maxPrice)
                                    }

                                    totalCount = 0;

                                }).map((room, i, array) => {
                                    if( (Math.ceil( (array.length - 1) / pageCount)) < page && paginationRef.current) {
                                        // const firstPage = ((paginationRef.current as HTMLElement).querySelector('.pagination__list li:first-child') as HTMLElement);

                                        // firstPage.dispatchEvent(new MouseEvent('click', { bubbles: true} ));
                                    }

                                    if(i === array.length - 1) {
                                        totalCount = array.length - 1;
                                    }

                                    if(i >= (page * pageCount - pageCount) && i < page * pageCount) {
                                    return (
                                            <Room number={room.number} 
                                                price={room.price}
                                                reviews={room.reviewNumber} 
                                                sliderItems={room.photos} 
                                                starsName={room.number + room.dayStart}
                                                starsCount={5}
                                                activeStars={room.starCount}/>)
                                    }
                                })
                            }
                        </div>
                        <div className="rooms__pagination" ref={paginationRef}
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

                            <Pagination pageLimit={Math.ceil(totalCount / pageCount)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default hotelsPage;