import React from "react";

const Question = ({question, options}) => {
    return (
        <div className="question">
            <div>{question}</div>
            <div>{JSON.stringify(options)}</div>
        </div>
    );
}

export default Question