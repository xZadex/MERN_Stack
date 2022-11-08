import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";

const ShowProduct = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

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
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )

}

export default ShowProduct