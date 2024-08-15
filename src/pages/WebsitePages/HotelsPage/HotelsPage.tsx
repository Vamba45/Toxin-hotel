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

    const [smoke, setSmoke] = useState("");
    const [pets, setPets] = useState("");
    const [guests, setGuests] = useState("");
    
    const [coridor, setCoridor] = useState("");
    const [helper, setHelper] = useState("");
    
    const [breakfast, setBreakfast] = useState("");
    const [table, setTable] = useState("");
    const [chair, setChair] = useState("");
    const [bed, setBed] = useState("");
    const [TV, setTV] = useState("");
    const [champoo, setChampoo] = useState("");

    let arr = [smoke, pets, guests, coridor, helper, breakfast, table, chair, bed, TV, champoo];

    let comfort = "comfort=all,";

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== "") {
            comfort += arr[i] + ','
        }
    }
    
    comfort = comfort.slice(0, -1); 

    console.log(comfort)

    // FILTERS DROPDOWN

    const [parents, setParents] = useState<Number>(0);
    const [children, setChildren] = useState<Number>(0);
    const [babies, setBabies] = useState<Number>(0);  
    
    const [bedrooms, setBedrooms] = useState<Number>(0);
    const [beds, setBeds] = useState<Number>(0);
    const [bathrooms, setBathrooms] = useState<Number>(0);  

    let dropdown = `beds=${beds}&adult=${parents}&children=${children}&babies=${babies}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`;

    //DATE FILTER

    const [minDate, setMinDate] = useState("");
    const [maxDate, setMaxDate] = useState("");

    let dates = `dayStart=${minDate}&dayEnd=${maxDate}`;

    //PRICE FILTER

    const [minPrice, setMinPrice] = useState(5000);
    const debouncedMinPrice = useDebounce(setMinPrice, 500);

    const [maxPrice, setMaxPrice] = useState(15000);
    const debouncedMaxPrice = useDebounce(setMaxPrice, 500);

    let prices = `maxPrice=${maxPrice}&minPrice=${minPrice}`;

    const [page, setPage] = useState(1);
    const limit = 12;
    const {data, isLoading} = roomsAPI.useFetchAllRoomsQuery(`page=${page}&limit=${limit}` + `&` + prices + '&' + dates + '&' + dropdown + '&' + comfort);

    console.log(data);
 
    return (
        <div className="hotels">
            <div className="container">
                <div className="hotels__rows">
                    <div className="hotels__column hotels__filters filters" ref={sidebarRef}>
                        <div className="filters__container">
                            <div className="filters__rangepicker child">
                                <RangePicker onChange={(date) => {
                                    setMinDate(date[0].split('.').reverse().join('-'));
                                    setMaxDate(date[1].split('.').reverse().join('-'));
                                }}/>
                            </div>
                            <div className="filters__guests child">
                                <DropDown menuItems={[{name: "Взрослые", setStateFunc: setParents}, {name: "Дети", setStateFunc: setChildren}, {name: "Младенцы", setStateFunc: setBabies}]} 
                                            placeholder="Гости" commonName="Гостей"/>
                            </div>
                            <div className="filters__diapasone child">
                                <RangeSlider defaultMax={15000} defaultMin={5000} maxValue={20000} priceGap={2500} title="Диапазон цены" 
                                onMaxChange={debouncedMaxPrice} 
                                onMinChange={debouncedMinPrice}/>
                            </div>
                            <div className="filters__checkbox-home child">
                                <Checkbox id="ch1" name="home" paragraph="Можно курить" onChangeFunc={() => {
                                    if(smoke === "") {
                                        setSmoke("smoke");
                                    } else {
                                        setSmoke("");
                                    }
                                }}/>
                                <Checkbox id="ch2" name="home" paragraph="Можно с питомцами" onChangeFunc={() => {
                                    if(pets === "") {
                                        setPets("pets");
                                    } else {
                                        setPets("");
                                    }
                                }}/>
                                <Checkbox id="ch3" name="home" paragraph={'Можно пригласить гостей (до 10 человек)'} onChangeFunc={() => {
                                    if(guests === "") {
                                        setGuests("guests");
                                    } else {
                                        setGuests("");
                                    }
                                }}/>
                            </div>
                            <div className="filters__checkbox-features child">
                                <Checkbox id="ch1" name="features" title="Широкий коридор" paragraph="Ширина коридоров в номере не менее 91 см" onChangeFunc={() => {
                                    if(coridor === "") {
                                        setCoridor("coridor");
                                    } else {
                                        setGuests("");
                                    }
                                }}/>
                                <Checkbox id="ch2" name="features" title="Помощник для инвалидов" paragraph={'На 1 этаже вас встретит специалист и проводит до номера'} onChangeFunc={() => {
                                    if(helper === "") {
                                        setHelper("helper");
                                    } else {
                                        setHelper("");
                                    }
                                }}/>
                            </div>
                            <div className="filters__interier child">
                                <DropDown menuItems={[{name: "Спальни", setStateFunc: setBedrooms}, {name: "Кровати", setStateFunc: setBeds}, {name: "Ванные комнаты", setStateFunc: setBathrooms}]} placeholder="Мебель" commonName="Мебели"/>
                            </div>
                            <div className="filters__checkbox-dropdown child">
                                <CheckBoxList options={[
                                                {name: "Завтрак", checkFunc: () => {
                                                    if(breakfast === "") {
                                                        setBreakfast("breakfast");
                                                    } else {
                                                        setBreakfast("");
                                                    }
                                                }}, 
                                                {name: "Письменный стол", checkFunc: () => {
                                                    if(table === "") {
                                                        setTable("table");
                                                    } else {
                                                        setTable("");
                                                    }
                                                } }, 
                                                {name: "Стул для кормления", checkFunc: () => {
                                                    if(chair === "") {
                                                        setChair("chair");
                                                    } else {
                                                        setChair("");
                                                    }
                                                } }, 
                                                {name: "Кроватка", checkFunc: () => {
                                                    if(bed === "") {
                                                        setBed("bed");
                                                    } else {
                                                        setBed("");
                                                    }
                                                } }, 
                                                {name: "Телевизор", checkFunc: () => {
                                                    if(TV === "") {
                                                        setTV("TV");
                                                    } else {
                                                        setTV("");
                                                    }
                                                } },    
                                                {name: "Шампунь", checkFunc: () => {
                                                    if(champoo === "") {
                                                        setChampoo("champoo");
                                                    } else {
                                                        setChampoo("");
                                                    }
                                                } }
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
                                {
                                    Boolean(data?.rooms.length) && <>Номера, которые мы для Вас подобрали</>
                                }
                                {
                                    Boolean(!data?.rooms.length) && <>Ничего не найдено</>
                                }
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
                                data?.rooms.map((room, i, array) => {
                                    return (<Room number={Number(room.number)} 
                                                price={Number(room.price)}
                                                reviews={Number(room.reviewcount)} 
                                                sliderItems={room.photos} 
                                                starsName={`${room.number} + ${room.daystart}`}
                                                starsCount={5}
                                                isLuxe={Boolean(room.luxe)}
                                                activeStars={Number(room.stars)}/>)
                                })
                            }
                        </div>
                        <div className="rooms__pagination">
                            <Pagination currentPage={data ? data.page : 1} onClick={setPage} pageLimit={data ? Math.ceil(data.total / data.limit) : 0}/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default hotelsPage;