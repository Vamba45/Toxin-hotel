import { FC } from "react";
import Counter from "../counter/counter";
import './dropdown.scss';

interface IDropDown {
    menuItems: string[]
}

const DropDown: FC<IDropDown> = ({menuItems}) => {

    function dropdownArrowClick(event: React.MouseEvent<HTMLButtonElement>) {
        const btn = (event.target as HTMLElement); 
        btn.style.pointerEvents = "none";

        btn.classList.toggle('rotate')

        setTimeout(() => {
            btn.style.pointerEvents = "auto";
        }, 300)
    }

    return (
        <div className="dropdown">
            <div className="dropdown__select">
                <div className="dropdown__text"></div>
                <button className="dropdown__arrow"
                        onClick={dropdownArrowClick}></button>
            </div>
            <ul className="dropdown__menu">
                {
                    menuItems.map((item) => 
                        <li>
                            {item}
                            <Counter/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default DropDown;