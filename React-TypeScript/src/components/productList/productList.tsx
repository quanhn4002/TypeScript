import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TProduct } from '~/interface/product'
import Card from 'react-bootstrap/Card'

const ProductList = () => {
  // ! Dump component va smart component
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }, [])

  // ! DependencyList = Danh sách phụ thuộc
  return products.map((product) => (
    <div className='san-pham'>
      <Card style={{ width: '18rem' }}>
        <Link to={`/shop/${product.id}`}>
          <Card.Img className='anh-sp' src={product.thumbnail} alt={product.title} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/shop/${product.id}`}>
            <Button variant='primary'>Chi tiết sản phẩm</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  ))
}

export default ProductList
