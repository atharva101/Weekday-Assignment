import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import filterSlice from "./filterSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  filter:filterSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
