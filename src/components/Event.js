import React from "react";
import ImageContainer from "./ImageContainer"
import './Event.css';

const Event = ({nextInfo, image, event, consequence}) => {
    const imageName = require(`../images/${image}`)
    return (
        <div className="wrapper">
            <ImageContainer className="eventImages" image={imageName}/>
            <div className="eventDivs">{event}</div>
            <div className="eventDivs consequence">{consequence}</div>
            <div className="centered-button-wrapper">
                <button onClick={nextInfo}>Continue</button>
            </div>
        </div>
    );
}

export default Event
