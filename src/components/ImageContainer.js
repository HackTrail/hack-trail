import React from "react"

const ImageContainer = ({className, image}) => {
    return (
        <img rel="preload" src={image} alt="dummy-alt-text" className={className}></img>
    )
}

export default ImageContainer
