import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>

      <button
        type="button"
        disabled={product.inventory === 0}
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
      </button>
    </article>
  )
}
