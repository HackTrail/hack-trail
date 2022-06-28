import React from "react";
import './Question.css';

const Question = ({question, options}) => {
    return (
        <div>
            <div className="question">{question}</div>
            <div className="options">
                {
                    options.map((each, index) => {
                        return <button className="option">{index+1 + ". " + each.option}</button>
                    })
                }
            </div>
        </div>
    );
}

export default Question
