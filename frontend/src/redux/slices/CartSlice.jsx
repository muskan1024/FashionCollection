import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  carts: JSON.parse(sessionStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.carts = action.payload;
    },
    addToCart: (state, action) => {
      const existingItem = state.carts.find((item) => item.productId === action.payload.productId);
      if (existingItem) {
        state.carts = state.carts.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        state.carts.push(action.payload);
      }
      if (!action.payload.isLoggedIn) {
        sessionStorage.setItem("cartItems", JSON.stringify(state.carts));
      }
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.productId !== action.payload.productId);
      if (!action.payload.isLoggedIn) {
        sessionStorage.setItem("cartItems", JSON.stringify(state.carts));
      }
    },
    incrementQty: (state, action) => {
      state.carts = state.carts.map((item) =>
        item.productId === action.payload.productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      if (!action.payload.isLoggedIn) {
        sessionStorage.setItem("cartItems", JSON.stringify(state.carts));
      }
    },
    decrementQty: (state, action) => {
      state.carts = state.carts.map((item) =>
        item.productId === action.payload.productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      if (!action.payload.isLoggedIn) {
        sessionStorage.setItem("cartItems", JSON.stringify(state.carts));
      }
    },
    clearCart: (state) => {
      state.carts = [];
      sessionStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;

export const saveCartToDatabase = createAsyncThunk(
  "cart/saveCartToDatabase",
  async ({ userId, cartItems }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:3002/api/cart/add`, {
        userId,
        cartItems,
      });
      return response.data;
    } catch (error) {
      console.error("Error saving cart to database:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

