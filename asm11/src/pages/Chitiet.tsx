import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { productType } from '../interfaces/products'
type Props = { product: productType }

const Chitiet = (props: Props) => {
  const Param = useParams()
  const id = Param.id
  const [product, setProduct] = useState<productType | null>(null)
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
    console.log(product)
  }, [])
  return (
    <div>
      {product && (
        <div key={product?.id}>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <img src={product?.thumbnail} alt={product?.title} />
          <p>{product?.price}</p>
          <p>{product?.category}</p>
          <p>{product?.brand}</p>
        </div>
      )}
    </div>
  )
}

export default Chitiet
