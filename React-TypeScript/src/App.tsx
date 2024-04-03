import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Header } from './components/header'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Home from './pages/home'
import Footer from './components/footer'
import DashBoard from './pages/admin/DashBoard'
import { useEffect, useState } from 'react'
import { TProduct } from './interface/product'
import ProductAdd from './pages/admin/ProductAdd'
import { createProduct, getProducts } from './api/product'
import ProductEdit from './pages/admin/ProductEdit'
import instance from './api'

function App() {
  // render dữ liệu ra màn hình
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])
  // thêm sản phẩm
  const handleAdd = (product: TProduct) => {
    ;(async () => {
      const data = await createProduct(product)
      setProducts([...products, data])
      navigate('/admin')
    })()
  }
  // sửa sản phẩm
  const handleEditProduct = (product: TProduct) => {
    ;(async () => {
      const { data } = await instance.put(`/products/${product.id}`, product)
      setProducts(products.map((item) => (item.id === data.id ? data : item)))
      navigate('/admin')
    })()
  }
  // xóa sản phẩm
  const handleDeleteProduct = (id: string | undefined) => {
    ;(async () => {
      const isConfirm = window.confirm('Are you sure?')
      if (isConfirm) {
        await instance.delete(`/products/${id}`)
        setProducts(products.filter((i) => i.id !== id))
      }
    })()
  }
  return (
    <>
      <Header />
      <div className='tc-m'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home products={products} />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/admin'>
            <Route index element={<DashBoard products={products} onDel={handleDeleteProduct} />} />
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
            <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEditProduct} />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
