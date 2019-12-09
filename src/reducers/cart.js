import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((product) => product.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload
      const existingProduct = state.items.find((product) => product.id === id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})
