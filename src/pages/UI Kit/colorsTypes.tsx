import React from "react";
import Color from "../../components/color/color"
import './colorsTypes.scss';

const ColorsTypes = () => {
    return (
        <div className="colors-types">
            <Color title="Dark Shade 100%" hex="#1F2041" squareBG="#1F2041"/>
            <Color title="Dark Shade 75%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.75)"/>
            <Color title="Dark Shade 50%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.5)"/>
            <Color title="Dark Shade 25%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.25)"/>
            <Color title="Dark Shade 5%" hex="#1F2041" squareBG="rgba(31, 32, 65, 0.05)"/>
            <Color title="Purple" hex="#BC9CFF" squareBG="#BC9CFF"/>
            <Color title="Green" hex="#6FCF97" squareBG="#6FCF97"/>
        </div>
    )
}

export default ColorsTypes;