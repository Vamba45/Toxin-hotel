import React from "react";
import Color from "../../components/color/color";
import Paragraph from "../../components/paragraph/parapgraph";
import './colorsTypes.scss';

const ColorsTypes = () => {
    return (
        <div className="colors-types page">
            <div className="colors-types__colors">
                <Color title="Dark Shade 100%" hex="#1F2041" squareBG="#1F2041"/>
                <Color title="Dark Shade 75%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.75)"/>
                <Color title="Dark Shade 50%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.5)"/>
                <Color title="Dark Shade 25%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.25)"/>
                <Color title="Dark Shade 5%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.05)"/>
                <Color title="Purple" hex="#BC9CFF" squareBG="#BC9CFF"/>
                <Color title="Green" hex="#6FCF97" squareBG="#6FCF97"/>
            </div>
            <div className="colors-types__paragraphs">
                <Paragraph fontsize="24" fontweight="700"
                            text="This one is the sub-section or
                            widget title"
                            title="H1"/>
                <Paragraph fontsize="19" fontweight="700"
                            text="Next one is the item title inside
                            widgets"
                            title="H2"/>
                <Paragraph fontsize="12" fontweight="700"
                            text="This is a label or CTA text"
                            title="H3"/>
                <Paragraph fontsize="14" fontweight="400"
                            text="This is the body text which is used for most
                            of the design, like paragraphs, lists, etc."
                            title="Body"
                            fontcolor="rgba(31, 32, 65, 0.75)"/>
            </div>
        </div>
    )
}

export default ColorsTypes;