import { useEffect, useState } from 'react'
import { productType } from '../interfaces/products'
import { Link } from 'react-router-dom'
const productList = () => {
  const [product, setProducts] = useState<productType[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  })

  return (
    <div>
      {product.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default productList
