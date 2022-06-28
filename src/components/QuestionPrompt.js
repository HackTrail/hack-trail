import React from "react";
import Question from './Question';
import ImageContainer from './ImageContainer'
import './QuestionPrompt.css';

const QuestionPrompt = (props) => {
    const imageName = require(`../images/${props.image}`)
    return (
        <div className="questionPrompt wrapper">
            <ImageContainer className="questionImages" image={imageName}/>
            <Question nextQuestion={props.nextQuestion} question={props.question} options={props.options}/>
        </div>
    );
}

export default QuestionPrompt
