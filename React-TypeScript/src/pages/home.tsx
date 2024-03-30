import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Banner from '~/components/banner'
import { TProduct } from '~/interface/product'

type Props = {
  products: TProduct[]
}
const Home = ({ products }: Props) => {
  return (
    <div>
      <Banner />
      {/* <h1>Products</h1> */}
      <div className='productList'>
        {products.map((product) => (
          <Card className='productCard' key={product.id}>
            <Card.Img className='image' variant='top' src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Text>{product?.description}</Card.Text>
              <Link to={`/shop/${product.id}`}>
                <Button variant='primary'>View</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
