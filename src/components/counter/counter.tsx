import { useState } from "react";
import './counter.scss';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [decrStyles, setDecrStyles] = useState("rgba(31, 32, 65, 0.25)")

    function minusClick(e : React.MouseEvent<HTMLButtonElement>) {
        if(count === 0) {
            return;
        } 

        if((count - 1) === 0) {
            setDecrStyles("rgba(31, 32, 65, 0.25)")
        }

        setCount(count - 1)
    }

    function plusClick(e : React.MouseEvent<HTMLButtonElement>) {
        setDecrStyles("rgba(31, 32, 65, 0.50)")

        setCount(count + 1)
    }

    return (
        <div className="counter">
            <button className="counter__minus"
                    onClick={minusClick}
                    style={
                        {
                            borderColor: decrStyles,
                            color: decrStyles
                        }
                    }>-</button>
            <div className="counter__value">{count}</div>
            <button className="counter__plus"
                    onClick={plusClick}>+</button>
        </div>
    )
}

export default Counter;