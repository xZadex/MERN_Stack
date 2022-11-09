import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const ProductList = (props) => {
    const{products, setProducts, deleteItem} = props;
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then((response) => {
            console.log(response.data.products)
            setProducts(response.data.products)
        })
        .catch((err)=> {console.log("Ran into an error with getting heros", err)})
    },[setProducts])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-3'>
            {products.map( (product, i) => <div  key={i} className='d-flex justify-content-center align-items-center gap-2'><Link to={`/product/${product._id}`}>{product.title}</Link> <button className='btn btn-danger' onClick={(e)=>{deleteItem(product._id)}}>Delete</button></div>)}
        </div>
    )
}

export default ProductList