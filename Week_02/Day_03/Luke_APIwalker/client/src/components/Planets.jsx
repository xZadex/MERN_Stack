import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { NumericFormat } from 'react-number-format';

const Planets = (props) => {
    const {content, setContent} = props;
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setContent({...response.data}))
            .catch(error => navigate("/errorpage"))
        }, [navigate,setContent,id]);

    return (
        <div className='text-light mt-5'>
            <h1>{content.name}</h1>
            <p><strong>Climate: </strong>{content.climate}</p>
            <p><strong>Terrain: </strong>{content.terrain}</p>
            <p><strong>Surface Water: </strong>{content.surface_water}</p>
            <p className='d-flex'><strong>Population: </strong><p className='population'><NumericFormat value={content.population} allowLeadingZeros thousandSeparator="," /></p></p>
        </div>
    )
}


export default Planets