import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import { productType } from '../interfaces/products'

type Props = {
  // product: productType
}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<productType | null>(null)
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])
  return (
    <>
      {product && ( // tại sao lại viết như này: product && (
        <Card style={{ width: '57rem' }}>
          <Card.Img className='images' variant='top' src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.discountPercentage}</Card.Text>
            <Card.Text>{product.rating}</Card.Text>
            <Card.Text>{product.stock}</Card.Text>
            <Card.Text>{product.brand}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
export default ProductDetail
