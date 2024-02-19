import { FC } from "react";
import './slider.scss';

interface ISlider {
    items: any[]
}

const Slider : FC<ISlider> = ({items}) => {
    return (
        <div className="slider">
            <ul className="slider__frames">
                {
                    items.map((item) => (
                        <li className="frame">
                            <img src={item} alt="slider frame" />
                        </li>
                    ))
                }
            </ul>
            <div className="slider__dots">
                {
                    items.map(() => (
                        <div className="dot"></div>
                    ))
                }
            </div>
            <div className="slider__buttons">
                <button className="slider__prev">
                </button>
                <button className="slider__next">
                </button>
            </div>
        </div>
    )
}

export default Slider;