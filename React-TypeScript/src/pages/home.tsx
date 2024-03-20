import Banner from '@/components/banner'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import ProductList from '@/components/productList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <h2>Danh sach san pham:</h2>
      <ProductList />
    </div>
  )
}

export default Home
