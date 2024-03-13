export type productssType = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}
export type cartType = {
  id: number
  products: productssType[]
  total: number
  discountPercentage: number
  discountedPrice: number
  shipping: number
  shippingDiscount: number
  shippingDiscountedPrice: number
  grandTotal: number
}
