import React from "react";

import Question from './Question';
import ImageContainer from './ImageContainer'
import './QuestionPrompt.css';


const QuestionPrompt = (props) => {
    return (
        <div className="questionPrompt wrapper">
            <ImageContainer image={image}/>
            <Question nextQuestion={props.nextQuestion} question={props.question} options={props.options}/>
        </div>
    );
}

export default QuestionPrompt
