import React from 'react'

export const Product = ({ product }) => {
  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>

      <button
        type="button"
        disabled={product.inventory === 0}
        onClick={() => { }}>
        Add to cart
      </button>
    </article>
  )
}
