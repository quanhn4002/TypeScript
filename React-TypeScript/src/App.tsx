import './App.css'
import Footer from './components/footer'
import { Header } from './components/header'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { productType } from './interfaces/products'
import { useEffect, useState } from 'react'
import Dashboard from './pages/admin/Dashboard'
import AddProducts from './pages/admin/addProduct'
import { addProduct } from './apis/product'
import EditProducts from './pages/admin/editProduct'
function App() {
  const Navigate = useNavigate()
  const [products, setProducts] = useState<productType[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  const handAddProduct = (product: productType) => {
    ;(async () => {
      const data = await addProduct(product)
      // setProducts((prev) => [...prev, data])
      setProducts([...products, data])
      Navigate('/admin')
      console.log(data)
    })()
  }
  const handEditProduct = (id: string, product: productType) => {
    ;(async () => {
      const data = await addProduct(product)
      setProducts(...products, data)
      Navigate('/admin')
    })()
  }

  return (
    <>
      <Header />
      <Routes>
        {/* client */}
        <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path='/product/:id' element={<ProductDetail products={products} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        {/* admin */}
        <Route path='/admin'>
          <Route index element={<Dashboard products={products} />} />
          <Route path='/admin/add' element={<AddProducts onAdd={handAddProduct} />} />
          <Route path='/admin/edit/:id' element={<EditProducts onAdd={handEditProduct} />} />
        </Route>
        {/* not found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
