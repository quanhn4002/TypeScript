import React, { useEffect, useState } from 'react'
import { productType } from '../interfaces/products'
import { Link } from 'react-router-dom'
const ProductList = () => {
  const [products, setProducts] = useState<productType[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  console.log(products)

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.thumbnail} alt={product.title} />
          <Link to={`/product/${product.id}`}>View</Link>
        </div>
      ))}
    </div>
  )
}
export default ProductList
