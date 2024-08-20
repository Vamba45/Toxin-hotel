import { FC, useState } from "react";
import Counter from "../counter/counter";
import './dropdown.scss';

interface IDropDown {
    menuItems: { name: string, count?: number, setStateFunc?: (value: number) => void } [],
    placeholder: string,
    commonName: string
}

const DropDown: FC<IDropDown> = ({menuItems, placeholder, commonName}) => {

    function accept(event: React.MouseEvent) {
        const parentDropdown = (event.target as HTMLElement).closest('.dropdown')

        parentDropdown?.classList.toggle('active');

        const btn = parentDropdown?.querySelector('.dropdown__arrow') as HTMLElement; 
        btn.classList.toggle('rotate');

        const menu = parentDropdown?.querySelector('.dropdown__menu') as HTMLElement;
        const counters = menu?.getElementsByClassName('counter') as HTMLCollection;
        
        let sum = 0;

        for(let i = 0; i < counters.length; i++) {
            let val = Number((counters[i].querySelector(".counter__value") as HTMLInputElement).value);

            //
                if(menuItems[i].setStateFunc) {
                    menuItems[i].setStateFunc(val);
                }
            //
            
            sum += val;
        }

        const text = parentDropdown?.querySelector('.dropdown__text') as HTMLElement;

        if(sum === 0) {
            text.innerText = placeholder;
            return;
        }

        text.innerText = `${commonName}: ${sum}`;
    }

    function resetBtnClick(event: React.MouseEvent) {
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
    
    let sum = menuItems.reduce((sum, current, i, arr) => {
        if(current.count !== undefined)
            return current.count + sum
        else return sum
    }, 0);

    return (
        <div className="dropdown">
            <div className="dropdown__select" onClick={accept}>
                <div className="dropdown__text">
                    {   
                        sum > 0 ? `${commonName}: ${sum} ` : placeholder
                    }
                </div>
                <div className="dropdown__arrow"></div>
            </div>
            <ul className="dropdown__menu">
                {
                    menuItems.map((item) => 
                        <li key={`${item.name}-${item.count}`}>
                            {item.name}
                            <Counter defautValue={item.count}/>
                        </li>
                    )
                }
                {
                    <div className="dropdown__buttons">
                        <div className="dropdown__resetBtn"
                                onClick={resetBtnClick}>очистить</div>
                        <div className="dropdown__acceptBtn"
                                onClick={accept}>применить</div>
                    </div>
                }
            </ul>
        </div>
    )
}

export default DropDown;