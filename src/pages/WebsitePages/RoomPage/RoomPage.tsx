import { FC, useEffect, useState } from "react";
import './RoomPage.scss';

import BookRoom, { IBookRoom } from "../../../components/bookRoom/bookRoom";
import Advantage, { IAdvantage } from "../../../components/advantage/advantage";
import Diagram, { IDiagram } from "../../../components/diagram/diagram";
import Comment, { IComment } from "../../../components/comment/comment";
import CheckBoxList, { ICheckBoxList } from "../../../components/checkboxExpandable/checkboxList";
import Slider from "../../../components/slider/slider";
import { roomsAPI } from "../../../store/services/roomSerivce";
import { useLocation } from "react-router";

interface IRoomPage {
    bookRoom: IBookRoom,
    advantages: IAdvantage[],
    comments: IComment[],
    diagram: IDiagram,
    checkBoxList: ICheckBoxList,
    images: string[]
}

const RoomPage: FC<IRoomPage> = ({bookRoom, advantages, comments, diagram, checkBoxList, images}) => {
    const idRgx = /\d*$/;
    const id = useLocation().pathname.match(idRgx)[0];

    let dropdownContent : any[] = [];

    let babies : any = 0;
    let children : any = 0;
    let adults : any = 0;

    try {
        babies = useLocation().search.match(/babies=\d+/)[0].match(/\d+/)[0] || 0;
    } catch {}

    try {
        children = useLocation().search.match(/children=\d+/)[0].match(/\d+/)[0] || 0;
    } catch {}

    try {
        adults = useLocation().search.match(/adult=\d+/)[0].match(/\d+/)[0] || 0;
    } catch {}

    dropdownContent.push({name: 'взрослые', count: Number(adults)}, {name: 'дети', count: Number(children)}, {name: 'младенцы', count: Number(babies)});

    const {data} = roomsAPI.useFetchOneRoomQuery(`${id}`);
    
    let daystart : any = undefined;

    try {
        daystart = useLocation().search.match(/dayStart=\d*-\d*-\d*/)[0].match(/\d*-\d*-\d*/)[0];
    } catch {}

    let dayend : any = undefined;

    try {
        dayend = useLocation().search.match(/dayEnd=\d*-\d*-\d*/)[0].match(/\d*-\d*-\d*/)[0];
    } catch {}

    return (
        <div className="roomPage">
            <div className="grid">
                {
                    data?.photos.map((img, i) => (
                        <div className={["grid__img", i === 0 ? "big" : ""].join(' ')}>
                            <div className="image" style={{
                                background: `url(${img}) center no-repeat`,
                                backgroundSize: 'cover'}}>

                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="roomPage__slider">

                {
                    data?.photos && <Slider items={data?.photos} width={550} height={320}/>
                }
            </div>
            <div className="container">
                <div className="roomPage__row">
                    <div className="roomPage__column info">
                        <div className="info__section">
                            <div>
                                <h3>Сведения о номере</h3>
                            {
                                advantages.map((e) => <Advantage img={e.img} text={e.text} title={e.text}/>)
                            }
                            </div>
                            <div>
                                <h3>Впечатления от номера</h3>
                            {
                                <Diagram categoryPercentage={diagram.categoryPercentage} reviewCount={data?.reviewcount}/>
                            }
                            </div>  
                        </div>
                        <div className="info__section">
                            <h3>Отзывы посетителей номера</h3>
                            {
                                comments.map((e) => <Comment avatar={e.avatar} lastvisit={e.lastvisit} 
                                                            likes={e.likes} text={e.text}
                                                            username={e.username}/>)
                            }
                        </div>
                        <div className="info__section">
                            <div>
                                <CheckBoxList options={checkBoxList.options} 
                                                title={checkBoxList.title} 
                                                type={checkBoxList.type}
                                                richTitles={checkBoxList.richTitles}/>
                            </div>
                            <div className="cancel">
                                <h3 className="cancel__h3">Отмена</h3>
                                <p className="cancel__paragraph">
                                    Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="roomPage__column form">
                        <BookRoom advancedServiceMoney={bookRoom.advancedServiceMoney}
                            dayEnd={dayend}
                            dayStart={daystart}
                            dropdownValue={dropdownContent}
                            number={Number(data?.number)}
                            price={Number(data?.price)}
                            serviceMoney={bookRoom.serviceMoney}
                            isLuxe={Boolean(data?.luxe)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomPage;