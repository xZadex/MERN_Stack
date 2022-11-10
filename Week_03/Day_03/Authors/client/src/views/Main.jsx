import React from 'react'
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

const Main = (props) => {
    const {authors, setAuthors, deleteItem} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res.data.authors)
            setAuthors(res.data.authors)
        })
        .catch((err)=> {return console.log('You ran into an error getting authors', err)})
    },[setAuthors])


    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>Add an author</Link>
            <p>We have quotes by:</p>
            <div className='col-9'>
                <table className="table table-secondary text-center">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        authors.map((author, i)=>{
                            return (<tr key={i} >
                                <td>{author.Name}</td>
                                <td className='d-flex gap-2 align-items-center justify-content-center'>
                                    <Link type="button" className="btn btn-warning" to={`/edit/${author._id}`}>Edit</Link>
                                    <button className='btn btn-danger' onClick={(e)=>{deleteItem(author._id)}}>Delete</button>
                                </td>
                            </tr>
                        )})
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Main