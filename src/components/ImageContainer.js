import React from "react"

const ImageContainer = ({className, image}) => {
    return (
        <img alt="dummy-alt-text" className={className} src={image}></img>
    )
}

export default ImageContainer
