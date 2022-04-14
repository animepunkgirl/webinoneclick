import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {ECommerceItem} from "../types/e-commerce/ECommerceItem";


interface ECommerceState {
  basket: ECommerceItem[],
  wishlist: ECommerceItem[],
  wishlistVisible: boolean,
  basketVisible: boolean
}

const initialState: ECommerceState = {
  basket: [],
  wishlist: [],
  wishlistVisible: false,
  basketVisible: false
}

export const ECommerceSlice = createSlice ({
  name: 'e-commerce',
  initialState,
  reducers: {
    basketAdd: (state, action: PayloadAction<ECommerceItem>) => {
      action.payload.count = 1
      state.basket.push(action.payload)
    },
    basketDelete: (state, action: PayloadAction<ECommerceItem>) => {
      const temp = current(state.basket)
      const index = temp.findIndex(item => item.name === action.payload.name && item.image === action.payload.image)
      state.basket = state.basket.filter((item, i) => i !== index)
    },
    wishlistAdd: (state, action: PayloadAction<ECommerceItem>) => {
      action.payload.count = 1
      state.wishlist.push(action.payload)
    },
    wishlistDelete: (state, action: PayloadAction<ECommerceItem>) => {
      const temp = current(state.wishlist)
      const index = temp.findIndex(item => item.name === action.payload.name && item.image === action.payload.image)
      state.wishlist = state.wishlist.filter((item, i) => i !== index)
    },
    changeWishlistVisible: (state, action:PayloadAction<boolean>) => {
      state.basketVisible = false
      state.wishlistVisible = action.payload
    },
    changeBasketVisible: (state, action:PayloadAction<boolean>) => {
      state.wishlistVisible = false
      state.basketVisible = action.payload
    },
  }
})

export const {basketAdd, basketDelete, wishlistAdd, wishlistDelete, changeWishlistVisible, changeBasketVisible} = ECommerceSlice.actions

export default ECommerceSlice.reducer