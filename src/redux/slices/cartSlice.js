import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addCart(state, action) {
            state.cart.push(action.payload)
        },
        deleteCart(state, action) {
            const id = action.payload
            const productsCart = state.cart.filter(item => item.id !== id)
            state.cart = productsCart;
        },
    },
})

// Se extraen los actions creator y el reducer
const { actions, reducer } = cartSlice

// Extrae y se exporta cada action creator por nombre
export const { addCart, deleteCart } = actions

// Export the reducer, either as a default or named export
export default reducer