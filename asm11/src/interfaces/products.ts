export type productType = {
  id?: number
  title: string
  description: string
  price: number
  discountPercentage?: number
  rating?: number
  stock?: number
  brand?: string
  category?: string
  thumbnail?: string
  images?: string[] //khai báo kiểu array type
  // c2 : array<string>
}
