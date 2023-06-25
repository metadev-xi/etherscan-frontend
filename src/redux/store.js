import { configureStore } from "@reduxjs/toolkit";
import blocksReducer from "./reducers/blocksReducers";

export const store = configureStore({
  reducer: {
    allBlocks: blocksReducer,
  },
});
