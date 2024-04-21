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

    function sliderOnClick(e: React.MouseEvent) {
        const parent = (e.target as HTMLElement).closest('.rangeSlider');

        const slider = parent?.querySelector('.rangeSlider__slider') as HTMLElement;

        const min = parent?.querySelector('.range-min') as HTMLInputElement;
        const max = parent?.querySelector('.range-max') as HTMLInputElement;

        let coordX = Math.ceil(e.pageX - slider.getBoundingClientRect().left);
        let procent = (coordX / slider.clientWidth) * 100;

        procent = Math.ceil(procent);
        procent = procent * (maxValue / 100);

        let maxVal = Number(max.value);
        let minVal = Number(min.value);

        let pivot = (maxVal - minVal) / 2;

        let condition = (procent > minVal) && (procent < maxVal) && ((minVal + pivot) < procent);

        if(procent < minVal) {
            min.value = `${procent}`;
            min.dispatchEvent(new InputEvent('input', {
                bubbles: true,
            }));
        } else if(procent > maxVal) {
            max.value = `${procent}`;
            max.dispatchEvent(new InputEvent('input', {
                bubbles: true,
            }));
        } else if(condition) {
            max.value = `${procent}`;
            max.dispatchEvent(new InputEvent('input', {
                bubbles: true,
            }));
        } else {
            min.value = `${procent}`;
            min.dispatchEvent(new InputEvent('input', {
                bubbles: true,
            }));
        }
    }

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
                            {defaultMax}₽
                        </div>
                    </div>
                </div>
            </div>
            <div className="rangeSlider__slider"
                    onClick={sliderOnClick}>
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