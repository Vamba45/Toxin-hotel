import { FC } from "react";
import './slider.scss';

interface ISlider {
    items: any[]
}

const Slider : FC<ISlider> = ({items}) => {

    function dotClick(e: React.MouseEvent<HTMLElement>) {
        const slider = (e.target as HTMLElement).closest('.slider');

        const frame = slider?.querySelector('.slider__frames') as HTMLElement;
        const dots = slider?.getElementsByClassName('dot') as HTMLCollection;

        for(let i = 0; i < dots.length; i++) {

            if(dots[i].classList.contains('active')) {
                    dots[i].classList.remove('active')
            }

            if(dots[i] === e.target) {
                dots[i].classList.add('active')
                frame.style.transform = `translateX(-${Number(slider?.clientWidth)*i}px)`;
            }
        }
    }

    function nextClick(e: React.MouseEvent) {
        const slider = (e.target as HTMLElement).closest('.slider');

        const frame = slider?.querySelector('.slider__frames') as HTMLElement;
        const dots = slider?.getElementsByClassName('dot') as HTMLCollection;

        for(let i = 0; i < dots.length; i++) {

            if(dots[i].classList.contains('active')) {

                if(i !== dots.length - 1) {
                    dots[i].classList.remove('active')
                    dots[i + 1].classList.add('active')

                    frame.style.transform = `translateX(-${Number(slider?.clientWidth)*(i+1)}px)`;

                    break
                }
            }
        }
    }

    function prevClick(e: React.MouseEvent) {
        const slider = (e.target as HTMLElement).closest('.slider');

        const frames = slider?.querySelector('.slider__frames') as HTMLElement;
        const dots = slider?.getElementsByClassName('dot') as HTMLCollection;

        for(let i = 0; i < dots.length; i++) {

            if(dots[i].classList.contains('active')) {

                if(i !== 0) {
                    dots[i].classList.remove('active')
                    dots[i - 1].classList.add('active')

                    frames.style.transform = `translateX(-${Number(slider?.clientWidth)*(i - 1)}px)`;

                    break
                }
            }
        }
    }

    return (
        <div className="slider">
            <ul className="slider__frames">
                {
                    items.map((item, index) => (
                        <li className={"frame" + " " + (index === 0 ? "active" : "")}>
                            <img src={item} alt="slider frame" />
                        </li>
                    ))
                }
            </ul>
            <div className="slider__dots">
                {
                    items.map((item, index) => (
                        <div className={"dot" + " " + (index === 0 ? "active" : "")}
                            onClick={dotClick}></div>
                    ))
                }
            </div>
            <div className="slider__buttons">
                <div className="slider__prev"
                    onClick={prevClick}>
                </div>
                <div className="slider__next"
                    onClick={nextClick}>
                </div>
            </div>
        </div>
    )
}

export default Slider;