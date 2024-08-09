import { useState } from "react"
import { Products } from "./components/Products"
import {products as initialProducts } from './mocks/products.json'

function App () {
  const [products, setProducts] = useState(initialProducts);
  

  return (
    <div>
      <Products products={products}/>
    </div>
  )
}

export default App