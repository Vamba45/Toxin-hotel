import { FC } from 'react';
import './cards.scss';

import card1 from '../../../assets/img/cards/1.png';
import card2 from '../../../assets/img/cards/2.png';
import card3 from '../../../assets/img/cards/3.png';
import card4 from '../../../assets/img/cards/4.png';

import Room from '../../../components/room/room';
import Login from '../../../components/login/login';
import Registration from '../../../components/registration/registration';
import SearchRoom from '../../../components/searchRoom/searchRoom';
import BookRoom from '../../../components/bookRoom/bookRoom';

const Cards: FC = () => {
    return(
        <div className='cards uikit'>
            <div className="cards__row">
                <div className="cards__column">
                    <Login/>
                    <Registration/>
                </div>
                <div className="cards__column">
                    <SearchRoom buttonClick={() => {}}/>
                    <BookRoom  advancedServiceMoney={100} number={888} price={5000} serviceMoney={250} dropdownValue={[{name: "взрослые", count: 4}, {name: "дети", count: 4}, {name: "младенцы", count: 4}]}/>
                </div>
                <div className="cards__column">
                    <Room isLuxe={true} number={888} price={9900} reviews={145} starsName='1room' sliderItems={[card1, card2, card3, card4]} activeStars={5}/>
                    <Room isLuxe={false} number={840} price={9900} reviews={65} starsName='2room' sliderItems={[card1, card2, card3, card4]} activeStars={4}/>
                </div>
            </div>
        </div>
    )
}

export default Cards;