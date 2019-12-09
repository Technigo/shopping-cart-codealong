import React from 'react'
import { Product } from './Product'

export const Products = () => {
  // const allProducts = useSelector((state) => state.products)

  // TODO - fetch all products from the store
  const allProducts = []

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
