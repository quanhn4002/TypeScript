import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/api'
import { TProduct } from '~/interface/product'
import Card from 'react-bootstrap/Card'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [products, setProduct] = useState<TProduct | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
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
