import Banner from '@/components/banner'

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
