import React from "react";
import ImageContainer from "./ImageContainer"

const Event = ({nextInfo, image, event, consequence}) => {
    const imageName = require(`../images/${image}`)
    return (
        <div className="wrapper">
            <ImageContainer className="eventImages" image={imageName}/>
            <div>{event}</div>
            <div>{consequence}</div>
            <div className="centered-button-wrapper">
                <button onClick={nextInfo}>Continue</button>
            </div>
        </div>
    );
}

export default Event
