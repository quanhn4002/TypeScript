import Banner from '@/components/banner'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import ProductList from '@/components/Products/productList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Banner />

      <ProductList />
    </div>
  )
}

export default Home
