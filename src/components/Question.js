import React from "react";
import './Question.css';
import { v4 as uuidv4 } from 'uuid';
// onSelect and onSubmit

const Question = (props) => {
    return (
        <div>
            <div className="question">{props.question}</div>
            <div className="options">
                {
                    props.options.map((each, index) => {
                        return (<button className="option" key={uuidv4()} onClick={props.nextQuestion}>
                                {index+1 + ". " + each.option}
                            </button>)
                    })
                }
            </div>
        </div>
    );
}

export default Question
