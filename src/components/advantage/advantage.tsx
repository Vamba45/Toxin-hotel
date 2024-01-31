import { FC } from 'react';
import './advantage.scss';

interface IAdvantage {
    img: string;
    title: string;
    text: string;
}

const Advantage: FC<IAdvantage> = ({img, title, text}) => {
    return (
        <div className="advantage">
            <img className="advantage__image" src={img}/>
            <div className='advantage__text'>
                <div className="advantage__title">{title}</div>
                <div className="advantage__paragraph">{text}</div>
            </div>
        </div>
    )
}

export default Advantage;