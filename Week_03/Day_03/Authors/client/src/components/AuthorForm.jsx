import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AuthorForm = (props) => {
    const {authors, setAuthors, currentAuthor, currentAuthorId, setCurrentAuthor} = props;
    const [author, setAuthor] = useState({
        Name:""
    });
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author/new", author)
        .then ((res) => {setAuthors([...authors,author]);navigate("/")})
        .catch(err=>{
            console.log(err.response.data.errors)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })            
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/update/${currentAuthorId}`, author)
        .then((res)=>{console.log(res);navigate("/")})
        .catch(err=>{
            console.log(err.response.data.errors)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })            
    }

    return (
        <div className='d-flex card col-6 p-3'>
            {
            (!currentAuthor)
            ?<form className='form' onSubmit={handleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-container'>
                    <label>Name:</label>
                    <input type="text" className='form-control' onChange={(e)=>{setAuthor({Name:e.target.value})}}/>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                    <Link type="button" className="btn btn-primary px-4" to={"/"}><strong>Cancel</strong></Link>
                    <button type='submit' className='btn btn-primary px-4'><strong>Submit</strong></button>
                </div>
            </form>
            :<form className='form' onSubmit={handleUpdate}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-container'>
                    <label>Name:</label>
                    <input type="text" className='form-control' onChange={(e)=>{setAuthor({Name:e.target.value});setCurrentAuthor({Name:e.target.value})}} value={currentAuthor.Name}/>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                    <Link type="button" className="btn btn-primary px-4" to={"/"}><strong>Cancel</strong></Link>
                    <button type='submit' className='btn btn-primary px-4'><strong>Submit</strong></button>
                </div>
            </form>
            }
        </div>
    )
}

export default AuthorForm