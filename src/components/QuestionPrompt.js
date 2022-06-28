import React from "react";

import Question from './Question';
import ImageContainer from './ImageContainer'
import './QuestionPrompt.css';

const QuestionPrompt = ({question, image, options}) => {
    return (
        <div className="questionPrompt wrapper">
            <ImageContainer image={image}/>
            <Question question={question} options={options}/>
        </div>
    );
}

export default QuestionPrompt
