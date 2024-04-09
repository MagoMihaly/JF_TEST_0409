import React from 'react'
import { products } from '../data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const SingleProduct = () => {
  return (
    <div className='d-flex flex-wrap gap-3 justify-content-evenly pt-3'>
      {products.map(prod => 
        <Card key={prod.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.thumbnail} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <p>{prod.category}</p>
          <Card.Text>
           {prod.description}
          </Card.Text>
          <p>Price : ${prod.price}</p>
        </Card.Body>
          <Button variant="primary" className='w90 mx-auto m-2'>Add to Cart</Button>
        </Card>
      )}
    </div>
  )
}

