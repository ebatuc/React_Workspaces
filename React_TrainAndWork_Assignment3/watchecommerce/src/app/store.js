import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../features/BlogSlice'
import cartReducer from '../features/CartSlice'
import orderReducer from '../features/OrderSlice'
import productReducer from '../features/ProductSlice'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    cart: cartReducer,
    order: orderReducer,
    products: productReducer,
  },
})