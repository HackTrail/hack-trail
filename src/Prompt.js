import React from "react";

const Prompt = ({question, image, options}) => {
    return (
        <div>
            {question}
            {image}
            {JSON.stringify(options)}
        </div>
    );
}

export default Prompt