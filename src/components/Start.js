import React from "react";
import {useState} from 'react';
import { ImageContainer } from "./ImageContainer"
import { QuestionPrompt } from "./QuestionPrompt"

const Start = ({image, questions}) => {
    const [isShown, setIsShown] = useState(false);

    const startGame = (event) => {
        setIsShown(true);
    }
    
    return (
        <div>
            {isShown ? (
                <QuestionPrompt key={questions[0].id} question={questions[0].question} image={questions[0].image} options={questions[0].options} />
            ) : (
                <div className="wrapper">
                    <h1>McMuffy's World</h1>
                    <ImageContainer image={image}/>
                    <p>Pending an actual description. For now, I love cats and especially cats named Noodle! She's the best. Meow meow.</p>
                    <div className="centered-button-wrapper">
                        <button onClick={startGame}>Start</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Start
