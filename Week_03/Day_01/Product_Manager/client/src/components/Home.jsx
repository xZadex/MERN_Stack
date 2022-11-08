import React,{useState} from 'react'
import axios from 'axios'

const Home = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    


    const newProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log("Ran into error"))
    }

    return (
        <div>
            <h1 className='mt-3 mb-5'>Product Manager</h1>
            <form onSubmit={newProduct}>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Title</label>
                        <input type="text" className='form-control' onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Price</label>
                        <input type="text" className='form-control' onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Description</label>
                        <input type="text" className='form-control' onChange={(e)=>{setDescription(e.target.value)}}/>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="submit" className='btn btn-outline-dark px-5 mt-3'>Submit</button>
                    </div>
                </div>
            </form>
            <div className='line'></div>
            <div>

            </div>
        </div>
    )
}

export default Home