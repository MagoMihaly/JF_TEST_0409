import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'

export const Home = () => {
  return (
    <>
      <header className='text-center p-3'>
        <h1 className='text-primary fw-bold'>Welcome to our Online Store</h1>
        <p className='text-secondary '>
        Discover our featured products and find the perfect items for you.
        </p>
      </header>
      <main className='container mw800 border-top mb-3'>
        <h2 className='text-primary p-3 fst-italic'>Featured Products</h2>
        <div className="bg-custom mw800 mx-auto">
          <FeaturedProducts />
        </div>
      </main>
      <footer>
        <p className='text-secondary text-center border-top p-3'>
          2023 Our Online Store. All rights reserved.
        </p>
      </footer>
    </>
  )
}

