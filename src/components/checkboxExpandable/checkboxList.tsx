import { FC } from 'react';
import './checkboxList.scss';
import Checkbox from '../checkboxx/checkbox';

interface ICheckBoxList {
    title: string;
    options: string[];
    richTitles?: string[];
    type: string
}

const CheckBoxList: FC<ICheckBoxList> = ({title, options, type, richTitles = []}) => {
    function buttonClick(e: React.MouseEvent<HTMLElement>) {
        const owner = (e.target as HTMLElement).closest('.checkboxList');

        const select = (owner?.querySelector('.checkboxList__select') as HTMLElement);
        const options = (owner?.querySelector('.checkboxList__options') as HTMLElement);

        select.classList.toggle('active')
        options.classList.toggle('active')
    }

    return (
        <div className='checkboxList'>
            <div className="checkboxList__select">
                {
                    type === "expanable" && 
                    <>
                        <div className="checkboxList__label"
                            onClick={buttonClick}>
                            {title}
                        </div>
                        <button className='checkboxList__button'
                                onClick={buttonClick}></button>
                    </>
                }
                {
                    type !== "expanable" && 
                    <div className="chechbox__text">
                        {title}
                    </div>
                }
            </div>
            {
                type === "expanable" && 
                <div className="checkboxList__options">
                        { 
                            options.map((opt, index) => (
                                <Checkbox paragraph={opt} name={title} id={`${index}`} key={index}/>
                            ))
                        }
                </div>
            }
            {
                type === "bullet" && 
                <ul className="checkboxList__point">
                        { 
                            options.map((opt, index) => (
                                <li>{opt}</li>
                            ))
                        }
                </ul>
            }
            {
                type === "rich" && 
                <div className="checkboxList__boxes">
                        { 
                            options.map((opt, index) => (
                                <Checkbox paragraph={richTitles[index]} title={opt} name={title} id={`${index}`} key={index}/>
                            ))
                        }
                </div>
            }
        </div>
    )
}

export default CheckBoxList;