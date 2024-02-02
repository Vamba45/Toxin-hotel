import { FC } from 'react';
import './rangeSlider.scss';

interface IRangeSlider {
    priceGap: number;
    maxValue: number;
    defaultMin: number;
    defaultMax: number;
    title: string;
}

const RangeSlider: FC<IRangeSlider> = ({priceGap, defaultMax, defaultMin, title, maxValue}) => {

    function rangeOnInput(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        const parent = target.closest('.rangeSlider')

        const rangeMin = parent?.querySelector('.range-min') as HTMLInputElement;
        const rangeMax = parent?.querySelector('.range-max') as HTMLInputElement;
        const inputMin = parent?.querySelector('.input-min') as HTMLInputElement;
        const inputMax = parent?.querySelector('.input-max') as HTMLInputElement;
        const progress = parent?.querySelector('.rangeSlider__progress') as HTMLElement;

        let minVal = Number(rangeMin.value),
            maxVal = Number(rangeMax.value);

        if(maxVal - minVal < priceGap) {
            if(target.className === "range-min") {
                rangeMin.value = `${maxVal - priceGap}`;

                progress.style.left = (Number(rangeMin.value) / Number(rangeMin.max)) * 100 + "%";
                progress.style.right = 100 - (Number(rangeMax.value) / Number(rangeMax.max)) * 100 + "%";
            } else {
                rangeMax.value = `${minVal + priceGap}`;
                    
                progress.style.left = (Number(rangeMin.value) / Number(rangeMin.max)) * 100 + "%";
                progress.style.right = 100 - (Number(rangeMax.value) / Number(rangeMax.max)) * 100 + "%";
            }
        } else {
            inputMin.textContent = String(minVal) + "₽";
            inputMax.textContent = String(maxVal) + "₽";

            progress.style.left = (Number(rangeMin.value) / Number(rangeMin.max)) * 100 + "%";
            progress.style.right = 100 - (Number(rangeMax.value) / Number(rangeMax.max)) * 100 + "%";
        }
    }

    let left = (defaultMin / maxValue) * 100 + "%";
    let right = (maxValue - defaultMax) / maxValue * 100 + "%";

    return (
        <div className="rangeSlider">
            <div className="rangeSlider__output">
                <div className="rangeSlider__container">
                    <div className="rangeSlider__title">
                        {title}
                    </div>
                    <div className="rangeSlider__inputs">
                        <div className='input-min'>
                            {defaultMin}₽
                        </div>
                        <span className='rangeSlider__separators'>-</span>
                        <div className='input-max'>
                            {defaultMin}₽
                        </div>
                    </div>
                </div>
            </div>
            <div className="rangeSlider__slider">
                <div className="rangeSlider__progress"
                    style={{
                        left: left,
                        right: right
                    }}>
                </div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" 
                min="0" max={maxValue} defaultValue={defaultMin}
                onInput={rangeOnInput}
                step={100}/>
                <input type="range" className="range-max" min="0" max={maxValue} defaultValue={defaultMax}
                onInput={rangeOnInput}
                step={100}/>
            </div>
        </div>
    )
}

export default RangeSlider;