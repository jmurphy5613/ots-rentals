import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: { value: {
        items: []
    } },
    reducers: {
        setCartItems: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setCartItems } = cartSlice.actions

export default cartSlice.reducer