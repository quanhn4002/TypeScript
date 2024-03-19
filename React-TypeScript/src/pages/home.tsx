import React from 'react'
import Banner from '../components/banner'
import ProductList from '../components/productList'
import { productType } from '@/interfaces/products'
type Props = {
  product: productType
}
const Home = (props: Props) => {
  return (
    <div>
      <Banner />

      <ProductList />
    </div>
  )
}

export default Home
