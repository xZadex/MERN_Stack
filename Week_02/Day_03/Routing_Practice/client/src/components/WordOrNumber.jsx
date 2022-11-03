import React from 'react'
import { useParams } from "react-router";

const WordOrNumber = () => {
    const {WordOrNumber, fontColor, bgColor} = useParams();

    const wordStyle = {
        color: fontColor,
        backgroundColor: bgColor
    }
    
    return (
        <div>
            {
            (!isNaN(WordOrNumber))
            ?<h1>The number is: {WordOrNumber}</h1>
            : <h1 style={wordStyle}>The word is: {WordOrNumber}</h1>
            }
        </div>
    )
}

export default WordOrNumber