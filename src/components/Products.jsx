/* eslint-disable react/prop-types */
import './Products.css';
import { AddToCartIcon } from './Icons'


export function Products ({ products }){
  console.log(products)
  return (
    <main className='products'>
      <ul>
        {
          products.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>
                  <strong>{product.title} - $ {product.price}</strong>
                </p>
                <div>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}