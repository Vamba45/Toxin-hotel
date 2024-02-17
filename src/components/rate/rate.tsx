import { FC } from "react";
import './rate.scss';

interface IRate {
    starCount: number;
    name: string;
}

const Rate: FC<IRate> = ({starCount, name}) => {
    let maket = Array.from(Array(starCount).keys())

    function rateOnClick(event: React.MouseEvent<HTMLInputElement>) {
        const el = (event.target as HTMLInputElement)
        const value = Number(el.value)
        const labelssCollection = (el.closest('.rate') as HTMLElement).getElementsByClassName('rate__label')

        //Всем звёздам, идущем перед выбранной, включая выбранную
        for(let i = 0; i < value; i++) {
            labelssCollection[i].classList.add('active')
        }

        //Всем звёздам, идущем после выбранной
        for(let i = value; i < labelssCollection.length; i++) {
            labelssCollection[i].classList.remove('active')
        }
    }

    return (
        <div className="rate">
            {
                maket.map((el) => (
                    <>
                        <input className="rate__input"
                                type="checkbox" 
                                id={`${name}-${el + 1}`} 
                                name={name} 
                                value={`${el + 1}`}
                                onClick={rateOnClick}/>
                        <label className="rate__label" htmlFor={`${name}-${el + 1}`}>
                        </label>
                    </>
                ))
            }
        </div>
    )
}

export default Rate;