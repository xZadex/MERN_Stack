import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import { useParams } from "react-router";
import AuthorForm from '../components/AuthorForm';

const EditAuthor = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState({
        Name:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            console.log(res.data.authors)
            setAuthor({Name:res.data.authors.Name})
        })
        .catch((err)=> {return console.log('You ran into an error getting product', err)})
    },[id, setAuthor])
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <p>Edit this author:</p>
            <AuthorForm currentAuthor={author} setCurrentAuthor={setAuthor} currentAuthorId={id}/>
        </div>
    )
}

export default EditAuthor