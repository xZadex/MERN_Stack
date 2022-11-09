import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowProduct = (props) => {
    const{deleteItem} = props;
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response)=> {
            console.log(response.data.products)
            setProduct(response.data.products)
        })
    },[id])
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center mt-5'>
            <h1>{product.title}</h1>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <div className='d-flex gap-2'>
                <Link className="btn btn-warning" to={`/product/update/${id}`}>Edit</Link> 
                <button className='btn btn-danger' onClick={(e)=>{deleteItem(product._id); navigate('/')}}>Delete</button>
            </div>
        </div>
    )

}

export default ShowProduct