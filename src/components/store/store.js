import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import cartReducer from './cartSlice'
const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer
    }
})
export default store