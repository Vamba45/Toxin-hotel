import { FC } from "react";
import './paragraph.scss';

interface IParagraph {
    title: string;
    text: string;
    fontsize: string;
    fontweight: string;
    fontcolor?: string
}

const Paragraph: FC<IParagraph> = ({title, text, fontsize, fontweight, fontcolor = "#1F2041"}) => {
    return (
        <div className="paragraph" style={{
            fontSize: (fontsize + "px"),
            fontWeight: fontweight
        }}>
            <div className="paragraph__title">{title}</div>
            <div className="paragraph__text"
                style={{
                    color: fontcolor
                }}>
                {text}
            </div>
        </div>
    )
}

export default Paragraph;