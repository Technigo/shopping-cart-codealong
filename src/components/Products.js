import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  const allProducts = useSelector((state) => state.products)

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
