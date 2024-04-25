import { FC, useState } from "react";
import './counter.scss';

interface ICounter {
    defautValue?: number
}

const Counter: FC<ICounter> = ({defautValue}) => {
    const [count, setCount] = useState(defautValue !== undefined ? defautValue : 0)

    function minusClick(e : React.MouseEvent) {
        if(count === 0) {
            return;
        }

        setCount(count - 1)
    }

    function plusClick(e : React.MouseEvent) {
        setCount(count + 1)
    }

    function onInputCounterValue(e: React.FormEvent<HTMLInputElement>) {
        const input = e.target as HTMLInputElement;

        setCount(Number((input).value));
    }

    return (
        <div className="counter">
            <div className={["counter__minus",,
                            count === 0 ? "disable" : ""].join(" ")
            }
                    onClick={minusClick}>-</div>
            <input className="counter__value" 
                    readOnly={true} 
                    value={`${count}`}
                    onInput={onInputCounterValue}/>
            <div className="counter__plus"
                    onClick={plusClick}>+</div>
        </div>
    )
}

export default Counter;