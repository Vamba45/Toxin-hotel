import { FC } from 'react';
import './cards.scss';

import card1 from '../../../assets/img/cards/1.png';
import card2 from '../../../assets/img/cards/2.png';
import card3 from '../../../assets/img/cards/3.png';
import card4 from '../../../assets/img/cards/4.png';

import Room from '../../../components/room/room';
import Login from '../../../components/login/login';
import Registration from '../../../components/registration/registration';

const Cards: FC = () => {
    return(
        <div className='cards uikit'>
            <Room isLuxe={true} number={888} price={9900} reviews={145} starsName='1room' sliderItems={[card1, card2, card3, card4]} activeStars={5}/>
            <Room isLuxe={false} number={840} price={9900} reviews={65} starsName='2room' sliderItems={[card1, card2, card3, card4]} activeStars={4}/>

            <Login/>

            <Registration/>
        </div>
    )
}

export default Cards;