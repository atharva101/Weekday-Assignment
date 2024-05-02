// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Idata } from "../typings/types";
const initialState = {
  jdList: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
        
      state.loading = false;
      state.jdList = state.jdList ?[...state.jdList, ...action.payload.jdList]: action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;
