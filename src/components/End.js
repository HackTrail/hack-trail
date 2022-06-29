import React from "react";
import ImageContainer from "./ImageContainer"

const End = ({data, getResults}) => {
    const imageName = require(`../images/${data.image}`)
    return (
        <div className="wrapper">
            <ImageContainer classname="center" image={imageName}/>
            <div className="box-yellow-bg">
                <p>{data.text}</p>
                <p>You achieved {data.name} ending and earned the {data.badge} badge!</p>
            </div>
            <div className="centered-button-wrapper">
                <button onClick={getResults}>See Results</button>
            </div>
        </div>
    );
}

export default End
