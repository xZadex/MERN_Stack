import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const People = (props) => {
    const {content, setContent} = props;
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setContent({...response.data}))
            .catch(error => navigate("/errorpage"))
        }, [navigate,setContent,id]);
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