import React from 'react'
import { productType } from '../interfaces/products'

import Card from 'react-bootstrap/Card'

const product = (productList: productType) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={productList.thumbnail} />
      <Card.Body>
        <Card.Title>{productList.title}</Card.Title>
        <Card.Text>{productList.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default product
