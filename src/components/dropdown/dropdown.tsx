import { FC } from "react";
import Counter from "../counter/counter";
import './dropdown.scss';

interface IDropDown {
    menuItems: string[],
    hasButtons?: boolean
}

const DropDown: FC<IDropDown> = ({menuItems, hasButtons = true}) => {

    function dropdownArrowClick(event: React.MouseEvent<HTMLButtonElement>) {
        const parentDropdown = (event.target as HTMLElement).closest('.dropdown')

        parentDropdown?.querySelector('.dropdown__menu')?.classList.toggle('active')

        const btn = parentDropdown?.querySelector('.dropdown__arrow') as HTMLElement; 
        btn.style.pointerEvents = "none";

        btn.classList.toggle('rotate')

        setTimeout(() => {
            btn.style.pointerEvents = "auto";
        }, 300)
    }

    function acceptBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
        dropdownArrowClick(event);

        const parentDropdown = (event.target as HTMLElement).closest('.dropdown')

        const menu = parentDropdown?.querySelector('.dropdown__menu') as HTMLElement;
        const counters = menu?.querySelectorAll('.counter');
        
        let sum = 0;

        for(let i = 0; i < counters.length; i++) {
            sum += Number(counters[i].querySelector(".counter__value")?.textContent);
        }

        const text = parentDropdown?.querySelector('.dropdown__text') as HTMLElement;

        if(sum === 0) {
            text.textContent = `Сколько гостей`;
            return;
        }

        text.textContent = `${sum}`;
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
            <div className="dropdown__select">
                <div className="dropdown__text">Сколько гостей</div>
                <button className="dropdown__arrow"
                        onClick={dropdownArrowClick}></button>
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