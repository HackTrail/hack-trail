import React from "react"
import './ImageContainer.css'

const ImageContainer = ({className, image}) => {
    return (
        <img alt="dummy-alt-text" className={className} src={image}></img>
    )
}

export default ImageContainer
