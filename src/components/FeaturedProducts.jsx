import React from 'react'
import { featuredProducts } from '../data'
import Card from 'react-bootstrap/Card';


export const FeaturedProducts = () => {
  return (
    <div className='d-flex flex-wrap justify-content-evenly gap-4 p-3'>
      {featuredProducts.map(product => 
        <Card 
          key={product.id}
          style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center">{product.title}</Card.Title>
        </Card.Body>
        <Card.Img src={product.thumbnail} />
      </Card>
      )}
    </div>
  )
}
