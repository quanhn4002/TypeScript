import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { productType } from '../interfaces/products'

type Props = { products: productType[] }

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [products, setProduct] = useState<productType | null>(null)

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  return (
    <div className='container'>
      <div className='productDetail'>
        {products && (
          <Card className='productCard' key={products?.id}>
            <Card.Img variant='top' style={{ height: '200px' }} src={products?.thumbnail} />
            <Card.Body>
              <Card.Title>{products?.title}</Card.Title>
              <Card.Text style={{ color: 'red' }}>{products.price} $</Card.Text>
              <Card.Text>{products?.category}</Card.Text>
              <Card.Text>{products?.brand}</Card.Text>
              <Card.Text>{products?.description}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
