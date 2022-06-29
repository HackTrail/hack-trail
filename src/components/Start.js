import React from "react";
import ImageContainer from "./ImageContainer"

const Start = ({startGame, image, questions}) => {
    return (
        <div className="wrapper">
            <h1>McMuffy's World</h1>
            <ImageContainer classname="center" image={image}/>
            <p>Hi there, Muffin McMuffy.  You're the new guy in town and it's time to make some decisions. Welcome to the neighborhood.</p>
            <div className="centered-button-wrapper">
                <button onClick={startGame}>Start</button>
            </div>
        </div>
    );
}

export default Start
