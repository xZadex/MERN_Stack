import React,{useState} from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList';

const Home = (props) => {
    const{products, setProducts, deleteItem} = props;
    const [formInfo, setFormInfo] = useState({
        title:'',
        price:'',
        description:''
    })

    const newProduct = (e) => {
        axios.post("http://localhost:8000/api/product/new", formInfo)
            .then(res => setProducts([...products,formInfo]))
            .catch(err => console.log("Ran into error"))
    }


    return (
        <div>
            <h1 className='mt-3 mb-5'>Product Manager</h1>
            <form onSubmit={newProduct}>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Title</label>
                        <input type="text" className='form-control' onChange={(e)=>{setFormInfo({...formInfo,title:e.target.value})}}/>
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Price</label>
                        <input type="text" className='form-control' onChange={(e)=>{setFormInfo({...formInfo,price:e.target.value})}}/>
                    </div>
                    <div className='d-flex form-group justify-content-center align-items-center gap-2'>
                        <label>Description</label>
                        <input type="text" className='form-control' onChange={(e)=>{setFormInfo({...formInfo,description:e.target.value})}}/>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="submit" className='btn btn-outline-dark px-5 mt-3'>Submit</button>
                    </div>
                </div>
            </form>
            <div className='line'></div>
            <div className='container d-flex flex-column justify-content-center align-items-center mt-3'>
                <h1>All Products</h1>
                <div>
                    <ProductList products={products} setProducts={setProducts} deleteItem={deleteItem}/>
                </div>
            </div>
        </div>
    )
}

export default Home