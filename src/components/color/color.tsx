import React, { FC } from "react"
import './color.scss';

interface IColor {
    title: string,
    hex: string,
    squareBG: string
}

const Color: FC<IColor> = ({ title, hex, squareBG }) => {
    return (
        <div className="color">
            <div className="color__square" style={{backgroundColor: squareBG}}></div>
            <div className="color__text">
                <div className="color__title">{title}</div>
                <div className="color__hex">{hex}</div>
            </div>
        </div>
    )
}

export default Color;