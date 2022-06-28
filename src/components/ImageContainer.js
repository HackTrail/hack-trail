import React from "react"
import './ImageContainer.css'

const ImageContainer = ({className, image}) => {
    return (
        <img className={className} src={image}></img>
    )
}

export default ImageContainer
