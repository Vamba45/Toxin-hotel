import { FC } from "react";
import Counter from "../counter/counter";
import './dropdown.scss';

interface IDropDown {
    menuItems: string[],
    hasButtons?: boolean
}

const DropDown: FC<IDropDown> = ({menuItems, hasButtons = true}) => {

    function dropdownArrowClick(event: React.MouseEvent<HTMLButtonElement>) {
        const btn = (event.target as HTMLElement); 
        btn.style.pointerEvents = "none";

        btn.classList.toggle('rotate')

        const parentDropdown = btn.closest('.dropdown')
        parentDropdown?.querySelector('.dropdown__menu')?.classList.toggle('active')

        setTimeout(() => {
            btn.style.pointerEvents = "auto";
        }, 300)
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
                        <button className="dropdown__resetBtn">очистить</button>
                        <button className="dropdown__acceptBtn">применить</button>
                    </div>
                }
            </ul>
        </div>
    )
}

export default DropDown;