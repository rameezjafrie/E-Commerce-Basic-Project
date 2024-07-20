import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../Data/productsData";

const productsDataLocal = localStorage.getItem("productsSliceData");

const initialState = productsDataLocal
  ? JSON.parse(productsDataLocal)
  : {
      saveBillingInfoToLocal: false,
      favoritesProducts: [],
      searchProducts: [],
      orderProducts: [...productsData],
      cartProducts: [],
      wishList: [],
      productQuantity: 1,
      selectedProduct: null,
      removeOrderProduct: "",
    };

const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {
    updateProductsState: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    addToArray: (state, { payload: { key, value } }) => {
      state[key].push(value);
    },
    removeById: (state, { payload: { key, id } }) => {
      const updatedState = state[key].filter((item) => item.id !== id);
      state[key] = updatedState;
    },
    removeByKeyName: (state, { payload: { dataKey, itemKey, keyValue } }) => {
      const updatedState = state[dataKey].filter(
        (item) => item[itemKey] !== keyValue
      );
      state[dataKey] = updatedState;
    },
    setEmptyArrays: (state, { payload: { keys } }) => {
      for (let i = 0; i < keys.length; i++) state[keys[i]] = [];
    },
    transferData: (state, { payload: { from, to } }) => {
      state[to] = state[to].concat(state[from]);
      state[from] = [];
    },
  },
});

export const {
  updateProductsState,
  addToArray,
  removeById,
  removeByKeyName,
  setEmptyArrays,
  transferData,
} = productsSlice.actions;
export default productsSlice.reducer;
