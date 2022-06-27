import React from "react";

export const Question = ({question, options}) => {
    return (
        <div className="question">
            <div>{question}</div>
            <div>{JSON.stringify(options)}</div>
        </div>
    );
}
