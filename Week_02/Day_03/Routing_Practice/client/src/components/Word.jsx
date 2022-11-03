import React from 'react'
import { useParams } from "react-router";

const Word = () => {
    const {word} = useParams();
    return (
        <div>
            {
            (word)
            ?<h1>The word is: {word}</h1>
            : <></>
            }
        </div>
    )
}

export default Word