import React from "react";
import Question from './Question';
import ImageContainer from './ImageContainer'
import './QuestionPrompt.css';

const QuestionPrompt = (props) => {
    const imageName = require(`../images/${props.image}`)
    return (
        <div className="questionPrompt wrapper">
            <ImageContainer className="questionImages" image={imageName}/>
            <Question id={props.id} nextInfo={props.nextInfo} updateScores={props.updateScores} question={props.text} options={props.options}/>
        </div>
    );
}

export default QuestionPrompt
