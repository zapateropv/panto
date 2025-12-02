import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  
    loading: false,
    items: [],
    cartItems: [],
    error: null,
    category: 'Chair'
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios('/products.json');
  return response.data
})


const storeSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
     setCategory:(state,action) => {
      state.category = action.payload
     },
    addProduct: (state, action) => {
    const item = action.payload;

    const existingItem = state.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    existingItem ? existingItem.quantity += 1
    : state.cartItems.push({ ...item, quantity: 1 });
  },
    increaseQuantity: (state, action) => {
      let product = action.payload
      const cartId = state.cartItems.find((item) => product == item.id)
      cartId ?  cartId.quantity += 1 : null
   },

    decreaseQuantity:(state, action) => {
      const product = action.payload
      const cartId = state.cartItems.find((item) => product == item.id)

      if(cartId && cartId.quantity > 1)
        cartId.quantity -= 1;
  },
   deleteItem: (state, action) => {
    const id = action.payload

     return {
    ...state,
    cartItems: state.cartItems.filter(item => item.id !== id)
   }
   
  }

    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    }
})

export const { setCategory, addProduct, increaseQuantity, decreaseQuantity, deleteItem } = storeSlice.actions;
export default storeSlice.reducer

