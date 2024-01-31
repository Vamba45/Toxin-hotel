import { FC } from 'react';
import './checkboxList.scss';
import Checkbox from '../checkboxx/checkbox';

interface ICheckBoxList {
    title: string;
    options: string[];
}

const CheckBoxList: FC<ICheckBoxList> = ({title, options}) => {
    function buttonClick(e: React.MouseEvent<HTMLElement>) {
        const owner = (e.target as HTMLElement).closest('.checkboxList');

        const select = (owner?.querySelector('.checkboxList__select') as HTMLElement);
        const options = (owner?.querySelector('.checkboxList__options') as HTMLElement);

        select.style.pointerEvents = 'none'

        select.classList.toggle('active')
        options.classList.toggle('active')

        setTimeout(() => {
            select.style.pointerEvents = 'auto'
        }, 300)
    }

    return (
        <div className='checkboxList'>
            <div onClick={buttonClick} 
                className="checkboxList__select">
                <div className="checkboxList__text">
                    {title}
                </div>
                <button className='checkboxList__button'></button>
            </div>
            <div className="checkboxList__options">
                {
                    options.map((opt, index) => (
                        <Checkbox labeltext={opt} name={title} id={`${index}`} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CheckBoxList;