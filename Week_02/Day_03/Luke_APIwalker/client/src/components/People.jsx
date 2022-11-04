import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const People = (props) => {
    const {content, setContent, current} = props;
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${current.current}/${current.id}`)
            .then(response => setContent({...response.data}))
            .catch(error => navigate("/"))
        }, [current,navigate,setContent]);
    return (
        <div className='text-light mt-5'>
            <h1>{content.name}</h1>
            <p><strong>Height: </strong>{content.height} cm</p>
            <p><strong>Mass: </strong>{content.mass} kg</p>
            <p><strong>Hair Color: </strong>{content.hair_color}</p>
            <p><strong>Skin Color: </strong>{content.skin_color}</p>
        </div>
    )
}

export default People