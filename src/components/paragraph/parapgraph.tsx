import { FC } from "react";
import './paragraph.scss';
import { Transform } from "stream";

interface IParagraph {
    title: string;
    text: string;
    fontsize: string;
    fontweight: string;
    fontcolor?: string;
    uppercase?: string | any;
}

const Paragraph: FC<IParagraph> = ({title, text, fontsize, fontweight, fontcolor = "#1F2041", uppercase = "normal"}) => {
    return (
        <div className="paragraph" style={{
            fontSize: (fontsize + "px"),
            fontWeight: fontweight
        }}>
            <div className="paragraph__title">{title}</div>
            <div className="paragraph__text"
                style={{
                    color: fontcolor,
                    textTransform: uppercase
                }}>
                {text}
            </div>
        </div>
    )
}

export default Paragraph;