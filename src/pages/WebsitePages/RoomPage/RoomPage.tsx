import { FC } from "react";
import './RoomPage.scss';

import BookRoom, { IBookRoom } from "../../../components/bookRoom/bookRoom";
import Advantage, { IAdvantage } from "../../../components/advantage/advantage";
import Diagram, { IDiagram } from "../../../components/diagram/diagram";
import Comment, { IComment } from "../../../components/comment/comment";
import CheckBoxList, { ICheckBoxList } from "../../../components/checkboxExpandable/checkboxList";

interface IRoomPage {
    bookRoom: IBookRoom,
    advantages: IAdvantage[],
    comments: IComment[],
    diagram: IDiagram,
    checkBoxList: ICheckBoxList,
    images: string[]
}

const RoomPage: FC<IRoomPage> = ({bookRoom, advantages, comments, diagram, checkBoxList, images}) => {
    return (
        <div className="roomPage">
            {/* <div className="grid">
                {
                    images.map((img, i) => (
                        <div className={["grid__img", i === 1 ? "big" : ""].join(' ')}>
                            <img src={img} alt='room image'/>
                        </div>
                    ))
                }
            </div> */}
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
                                <Diagram categoryPercentage={diagram.categoryPercentage} reviewCount={diagram.reviewCount}/>
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
                            dayEnd={bookRoom.dayEnd}
                            dayStart={bookRoom.dayStart}
                            dropdownValue={bookRoom.dropdownValue}
                            number={bookRoom.number}
                            price={bookRoom.price}
                            serviceMoney={bookRoom.serviceMoney}
                            isLuxe={bookRoom.isLuxe}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomPage;