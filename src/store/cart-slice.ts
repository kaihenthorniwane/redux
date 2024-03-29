import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const indexOfCartItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfCartItem !== -1) {
        state.items[indexOfCartItem].quantity++;
      } else {
        const newCartItem: CartItem = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        };
        state.items.push(newCartItem);
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      const indexOfCartItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[indexOfCartItem].quantity === 1) {
        state.items.splice(indexOfCartItem, 1);
      } else {
        state.items[indexOfCartItem].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
