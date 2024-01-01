import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import blogReducer from '../features/BlogSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blog: blogReducer,
  },
})