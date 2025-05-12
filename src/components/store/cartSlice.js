import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({

    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        Addtocart: (state, action) => {
            state.items.push(action.payload)
        },
        Deletecart: (state) => {
            state.items.pop()
        }
    }
})
export const { Addtocart, Deletecart } = cart.actions
export default cart.reducer