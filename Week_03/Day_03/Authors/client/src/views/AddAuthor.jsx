import React from 'react'
import {Link} from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const AddAuthor = (props) => {
    const {authors, setAuthors} = props;
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <AuthorForm authors={authors} setAuthors={setAuthors}/>
        </div>
    )
}

export default AddAuthor