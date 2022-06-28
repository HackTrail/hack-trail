import React from "react";
import ImageContainer from "./ImageContainer"

const Start = ({startGame, image, questions}) => {
    return (
        <div className="wrapper">
            <h1>McMuffy's World</h1>
            <ImageContainer image={image}/>
            <p>Pending an actual description. For now, I love cats and especially cats named Noodle! She's the best. Meow meow.</p>
            <div className="centered-button-wrapper">
                <button onClick={startGame}>Start</button>
            </div>
        </div>
    );
}

export default Start
