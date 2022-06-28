import React from "react";
import Question from './Question';
import ImageContainer from './ImageContainer'
import './QuestionPrompt.css';

const QuestionPrompt = ({className, question, imageName, options}) => {
    const image = require(`../images/${imageName}`)
    return (
        <div className="questionPrompt wrapper">
            <ImageContainer className={className} image={image}/>
            <Question question={question} options={options}/>
        </div>
    );
}

export default QuestionPrompt
