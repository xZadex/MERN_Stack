import Home from './views/Home';
import ShowProduct from './components/ShowProduct';
import Update from './views/Update';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react'
import './App.css';

function App() {
    const [products, setProducts] = useState([])

    const removeProduct = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    const deleteItem = (id) => {
        axios.delete('http://localhost:8000/api/product/delete/' + id)
            .then(res => {
                removeProduct(id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="App container d-flex justify-content-center align-items-center">
            <Routes>
                <Route path="/" element={<Home products={products} setProducts={setProducts} deleteItem={deleteItem} />} />
                <Route path="/product/update/:id" element={<Update products={products} setProducts={setProducts} deleteItem={deleteItem} />} />
                <Route path="/product/:id" element={<ShowProduct products={products} setProducts={setProducts} deleteItem={deleteItem} />} />
            </Routes>
        </div>
    );
}

export default App;
