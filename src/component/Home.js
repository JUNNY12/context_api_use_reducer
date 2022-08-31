import { CartState } from "../context/Context"
import ProductCard from "./ProductCard"
import FilterProduct from "./FilterProduct"

const Home = () => {
    const {
        state: {products}
    } = CartState()
    console.log(products)
  return (
    <div className="home">
        <FilterProduct />
        <div className="productContainer">
            {
                products.map((product) => {
                    return <ProductCard product={product} key={product.id} />
                })
            }
        </div>

    </div>
  )
}

export default Home