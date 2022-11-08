import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const ProductList = () => {
    const [products, setProducts] = useState([])
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then((response) => {
            console.log(response.data.products)
            setProducts(response.data.products)
        })
        .catch((err)=> {console.log("Ran into an error with getting heros", err)})
    },[])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-3'>
            {products.map( (product, i) => <Link key={i} to={`/product/${product._id}`}>{product.title}</Link>)}
        </div>
    )
}

export default ProductList