import React from 'react'
import { useParams } from "react-router";

const Number = () => {
    const {number} = useParams();
    return (
        <div>
            {
            (!isNaN(number))
            ?<h1>The number is: {number} </h1>
            : <></>
            }
        </div>
    )
}

export default Number