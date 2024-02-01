import { FC } from 'react';
import './rangeSlider.scss';

const RangeSlider: FC = () => {
    return (
        <div className="rangeSlider">
            <div className='price-input'>
                <div className="field">
                    <span>Min</span>
                    <input type="number" className='input-min' defaultValue="2500"/>
                </div>
                <div className="separator">
                    -
                </div>
                <div className="field">
                    <span>Max</span>
                    <input type="number" className='input-max' defaultValue="7500"/>
                </div>
            </div>
            <div className="slider">
                <div className="progress">

                </div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min="0" max="10000" defaultValue="2500"/>
                <input type="range" className="range-max" min="0" max="10000" defaultValue="2500"/>
            </div>
        </div>
    )
}

export default RangeSlider;