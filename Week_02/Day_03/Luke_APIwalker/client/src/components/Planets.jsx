import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Planets = (props) => {
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
            <p><strong>Climate: </strong>{content.climate}</p>
            <p><strong>Terrain: </strong>{content.terrain}</p>
            <p><strong>Surface Water: </strong>{content.surface_water}</p>
            <p><strong>Population: </strong>{content.population}</p>
        </div>
    )
}


export default Planets