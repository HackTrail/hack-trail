import React from "react";

const Prompt = ({question, image, options}) => {
    return (
        <div>
            {question}
            {image}
            {options}
        </div>
    );
}

export default Prompt