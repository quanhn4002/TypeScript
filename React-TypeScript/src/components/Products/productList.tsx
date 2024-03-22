import { useEffect, useState } from 'react'
import { productType } from '../../interfaces/products'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './product.css'

const ProductList = () => {
  const [products, setProducts] = useState<productType[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className='productList'>
      {products.map((product) => (
        <Card className='productCard' key={product.id}>
          <Card.Img variant='top' style={{ height: '50px', width: '50px' }} src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>{product?.description}</Card.Text>
            <Link to={`/product/${product.id}`}>
              <Button variant='primary'>View</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ProductList
