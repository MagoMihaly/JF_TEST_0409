import React from 'react'
import { SingleProduct } from './SingleProduct'

export const Products = () => {
  return (
    <div className='container p-3 shadow'>
      <h3>Our Products</h3>
      <div className='p-1 bg-custom rounded'>
        <SingleProduct />
      </div>
    </div>
  )
}

