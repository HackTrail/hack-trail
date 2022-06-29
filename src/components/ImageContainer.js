import React from "react"

const ImageContainer = ({className, image}) => {
    return (
        <img src={image} alt="dummy-alt-text" className={className}></img>
    )
}

export default ImageContainer
