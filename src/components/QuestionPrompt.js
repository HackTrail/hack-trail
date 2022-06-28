import React, {useState} from "react";

import Question from './Question';
import ImageContainer from './ImageContainer'
import './QuestionPrompt.css';


const QuestionPrompt = ({question, image, options}) => {
    const [questionChoice,setquestionChoice] = useState([-1])
    const pickchoice = (id) => {
        console.log("old choice:",questionChoice)
        setquestionChoice(id)
        console.log("new choice:",questionChoice)
    }
    return (
        <div className="questionPrompt">
            <ImageContainer image={image}/>
            <Question pickchoice={pickchoice} question={question} options={options}/>
        </div>
    );
}

export default QuestionPrompt