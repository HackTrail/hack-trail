import React from "react";
import { v4 as uuidv4 } from 'uuid';
// onSelect and onSubmit

const Question = (props) => {
    return (
        <div className="question">
            <div>{props.question}</div>
            <div>{props.options.map((item) => 
                (<button type="button" key={uuidv4()} onClick={props.nextQuestion}>
                    {item.option}
                </button>)
            )}
            </div>
        </div>
    );
}

export default Question