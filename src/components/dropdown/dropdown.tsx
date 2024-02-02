import { FC } from "react";
import Counter from "../counter/counter";
import './dropdown.scss';

interface IDropDown {
    menuItems: string[],
    hasButtons?: boolean
}

const DropDown: FC<IDropDown> = ({menuItems, hasButtons = true}) => {

    function dropdownArrowClick(event: React.MouseEvent<HTMLElement>) {
        const parentDropdown = (event.target as HTMLElement).closest('.dropdown')

        parentDropdown?.querySelector('.dropdown__menu')?.classList.toggle('active')

        const btn = parentDropdown?.querySelector('.dropdown__arrow') as HTMLElement; 
        btn.classList.toggle('rotate')

        const select = parentDropdown?.querySelector('.dropdown__select') as HTMLElement;
        select.style.pointerEvents = 'none';

        setTimeout(() => {
            select.style.pointerEvents = 'auto';
        }, 300)

        if(hasButtons === false
            && (event.target as HTMLElement).classList.contains('rotate')) {
            const menu = parentDropdown?.querySelector('.dropdown__menu') as HTMLElement;
            const counters = menu?.getElementsByClassName('counter') as HTMLCollection;
            
            let text: string = "";
            let sum = 0;

            for(let i = 0; i < counters.length; i++) {
                let num = Number(
                                (counters[i].querySelector(".counter__value") as HTMLInputElement)?.value
                            );

                sum += num;
                
                if(num !== 0) {
                    text = text + `${menuItems[i]} - ${num}. `;
                }
            }

            if(sum <= 0) {
                text = "Спальни и ванные"
            }

            (parentDropdown?.querySelector('.dropdown__text') as HTMLElement).textContent = text
        }
    }

    function acceptBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
        const parentDropdown = (event.target as HTMLElement).closest('.dropdown')

        const arrow = parentDropdown?.querySelector('.dropdown__arrow') as HTMLElement;
        arrow.dispatchEvent(new Event('click', {bubbles: true}))

        const menu = parentDropdown?.querySelector('.dropdown__menu') as HTMLElement;
        const counters = menu?.getElementsByClassName('counter') as HTMLCollection;

        let sum = 0;

        for(let i = 0; i < counters.length; i++) {
            sum += Number(
                            (counters[i].querySelector(".counter__value") as HTMLInputElement)?.value
                        );
        }

        const text = parentDropdown?.querySelector('.dropdown__text') as HTMLElement;

        if(sum === 0) {
            text.innerText = `Сколько гостей`;
            return;
        }

        text.innerText = `Гостей: ${sum}`;

        console.log(text.innerText)
    }

    function resetBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
        const counters = ( 
                        (event.target as HTMLElement).closest('.dropdown')?.
                        querySelector('.dropdown__menu') as HTMLElement
                    )?.
                    querySelectorAll('.counter');

        for(let i = 0; i < counters.length; i++) {
            (counters[i].querySelector('.counter__value') as HTMLInputElement).value = "0";
            (counters[i].querySelector('.counter__value') as HTMLInputElement).dispatchEvent(new Event('input', {bubbles: true}))
        }
    }

    const maxWidth = hasButtons ? "320px" : "266px";

    return (
        <div className="dropdown"
            style={{maxWidth: maxWidth}}>
            <div className="dropdown__select" onClick={dropdownArrowClick}>
                <div className="dropdown__text">
                    {
                        hasButtons === false ? "Спальни и ванные" : "Сколько гостей"
                    }
                </div>
                <button className="dropdown__arrow"></button>
            </div>
            <ul className="dropdown__menu">
                {
                    menuItems.map((item) => 
                        <li key={item}>
                            {item}
                            <Counter/>
                        </li>
                    )
                }
                {   hasButtons && 
                    <div className="dropdown__buttons">
                        <button className="dropdown__resetBtn"
                                onClick={resetBtnClick}>очистить</button>
                        <button className="dropdown__acceptBtn"
                                onClick={acceptBtnClick}>применить</button>
                    </div>
                }
            </ul>
        </div>
    )
}

export default DropDown;