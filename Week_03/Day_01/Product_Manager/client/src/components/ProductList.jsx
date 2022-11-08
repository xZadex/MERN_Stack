import React from 'react'
import axios from 'axios'

const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) => <a key={i} href="#">{product}</a>)}
        </div>
    )
}

export default ProductList