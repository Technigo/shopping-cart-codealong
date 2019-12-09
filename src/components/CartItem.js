import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <div className="info">
        <span className="quantity">x{product.quantity}</span>
        <span className="sum">{product.price * product.quantity}:-</span>
      </div>

      <span className="actions">
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </span>
    </li>
  )
}
