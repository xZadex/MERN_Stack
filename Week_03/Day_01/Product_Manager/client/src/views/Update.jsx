import axios from 'axios';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

const Update = () => {
    const [product, setProduct] = useState({
        title:"",
        price:"",
        description:""
    })
    const [name, setName] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res.data.products)
            setName(res.data.products.title)
            setProduct({title:res.data.products.title, price:res.data.products.price, description:res.data.products.description})
        })
        .catch((err)=> {return console.log('You ran into an error getting product', err)})
    },[id, setProduct])

    const handleForm = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`, product)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
        navigate("/")
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h1>Edit {name}</h1>
            <form className='mt-3' onSubmit={handleForm}>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Title</label>
                        <input type="text" className='form-control' value={product.title} onChange={(e)=>{setProduct({...product,title:e.target.value})}}/>
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Price</label>
                        <input type="text" className='form-control' value={product.price} onChange={(e)=>{setProduct({...product,price:e.target.value})}}/>
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Description</label>
                        <input type="text" className='form-control' value={product.description} onChange={(e)=>{setProduct({...product,description:e.target.value})}}/>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="submit" className='btn btn-outline-dark px-5 mt-3'>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Update