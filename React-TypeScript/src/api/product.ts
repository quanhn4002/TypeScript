import { TProduct } from '~/interface/product'
import instance from '.'

export const getProducts = async () => {
  try {
    const { data } = await instance.get('/products')
    console.log(data)
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

export const createProduct = async (product: TProduct) => {
  try {
    const { data } = await instance.post(`/products`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const editProduct = async (product: TProduct) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const removeProduct = async (id: string) => {
  try {
    await instance.delete(`/products/${id}`)
  } catch (error) {
    console.log(error)
  }
}
