import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { productType } from '../interfaces/products'

type Props = { product: productType }

const ProductDetail = (props: Props) => {
  const params = useParams()
  const id = params.id
  const [product, setProduct] = useState<productType | null>(null)

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  return (
    <div className='productDetail'>
      {product && (
        <Card className='productCard' key={product?.id}>
          <Card.Img variant='top' style={{ height: '200px' }} src={product?.thumbnail} />
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text style={{ color: 'red' }}>{product.price} $</Card.Text>
            <Card.Text>{product?.category}</Card.Text>
            <Card.Text>{product?.brand}</Card.Text>
            <Card.Text>{product?.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default ProductDetail
