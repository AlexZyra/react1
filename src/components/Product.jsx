import React from 'react'

const Product = (props) => {
    const { product } = props;

    return (
        <div className='product'>
            <img src={product.img} alt={product.name}/>
            <h4>{product.name}</h4>
            <h6>{product.price} ₴</h6>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Product