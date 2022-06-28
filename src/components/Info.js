import React from "react";
import ImageContainer from "./ImageContainer"
import startImage from '../images/start_screen.png'; // placeholder

const Info = ({nextQuestion, text}) => {
    return (
        <div className="wrapper">
            <h2>Did you know?</h2>
            <p>{text}</p>
            <ImageContainer image={startImage}/>
            <div className="centered-button-wrapper">
                <button onClick={nextQuestion}>Next</button>
            </div>
        </div>
    );
}

export default Info
