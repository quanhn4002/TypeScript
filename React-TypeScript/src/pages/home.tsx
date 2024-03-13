import React from 'react'
import Banner from '../components/banner'
import ProductList from '../components/productList'

const Home = () => {
  return (
    <div>
      <Banner />
      <h2>Danh sach san pham</h2>
      <ProductList />
    </div>
  )
}

export default Home
