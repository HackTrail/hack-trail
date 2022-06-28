import React from "react"

const ImageContainer = ({className, image}) => {
    return (
        <img className={className} src={image}></img>
    )
}

export default ImageContainer
