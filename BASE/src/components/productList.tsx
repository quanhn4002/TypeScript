import React, { useState, useEffect } from 'react'

import { productType } from '../interfaces/products'

import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
const productList = () => {
  const [products, setProducts] = useState<productType[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className='Cardto'>
      {products.map((product) => (
        <Card className='card' style={{ width: '18rem' }}>
          <Link to={`/shop/${product.id}`}>
            <Card.Img className='images' variant='top' src={product.thumbnail} />
          </Link>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>

            <Card.Text>{product.description}</Card.Text>
            <Link to={`/shop/${product.id}`}> View</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default productList
