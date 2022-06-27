import React from "react";

import Question from './Question';
import ImageContainer from './ImageContainer'
import './QuestionPrompt.css';

export const QuestionPrompt = ({question, image, options}) => {
    return (
        <div className="questionPrompt">
            <ImageContainer image={image}/>
            <Question question={question} options={options}/>
        </div>
    );
}
