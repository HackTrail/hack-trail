import React from "react";
import './Prompt.css';

const Prompt = ({question, image, options}) => {
    return (
        <div className="questionPrompt">
            <div>{image}</div>
            <div>{question}</div>
            <div>{JSON.stringify(options)}</div>
        </div>
    );
}

export default Prompt