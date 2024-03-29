import { productType } from '@/interfaces/products'
import { instance } from '.'

export const getProducts = async () => {
  try {
    const data = await instance.get('/products')
    return data
  } catch (error) {
    console.log(error)
  }
}
export const getProduct = async (id: string) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const addProduct = async (product: productType) => {
  try {
    const data = await instance.post('/products', product)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const updateProduct = async (id: string, product: productType) => {
  try {
    const data = await instance.put(`/products/${id}`, product)
    return data
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
