import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { OneProductApi, productApi } from './ProductsApi'
import cartSlice from './cartSlice'
import  favSlice  from './favoriteSlice'
export const store = configureStore({
  reducer: {
    cartt: cartSlice,
    favorite:favSlice,
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    [OneProductApi.reducerPath]: OneProductApi.reducer,
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(OneProductApi.middleware),
})

setupListeners(store.dispatch)