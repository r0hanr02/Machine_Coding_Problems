import React from 'react'

const ProductCards = ({product}) => {
  return (
    <div className='product-card'>
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt={product.title} />
        <span>Category : {product.category}</span>
        <span> ${product.price}</span>
    </div>
  )
}

export default ProductCards