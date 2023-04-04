import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selectedProduct")
    ? JSON.parse(localStorage.getItem("selectedProduct"))
    : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const ProQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(ProQuantity);
      state.selectedProductsID.push(action.payload.id);
      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
    increaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increaseProduct.quantity += 1;
      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectedProducts)
      );
    },
    decreaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increaseProduct.quantity -= 1;
      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectedProducts)
      );
      if (increaseProduct.quantity === 0) {
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const newArray = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectedProducts = newArr;
        state.selectedProductsID = newArray;
        localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }
    },
    deleteProduct: (state, action) => {
      // state.value += action.payload
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      const newArray = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectedProducts = newArr;
      state.selectedProductsID = newArray;
      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTocart, increaseQuantity, decreaseQuantity, deleteProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
