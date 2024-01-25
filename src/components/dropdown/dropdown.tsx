import { FC } from "react";
import Counter from "../counter/counter";
import './dropdown.scss';

interface IDropDown {
    menuItems: string[]
}

const DropDown: FC<IDropDown> = ({menuItems}) => {
    return (
        <div className="dropdown">
            <div className="dropdown__select">
                text
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