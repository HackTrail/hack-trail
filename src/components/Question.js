import React from "react";

const Question = ({question, options}) => {
    return (
        <div>
            <div className="question">{question}</div>
            <div className="options">{JSON.stringify(options)}</div>
        </div>
    );
}

export default Question
