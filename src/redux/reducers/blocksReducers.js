import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blocksServices from "../services/blocksServices";

const initialState = {
  blocks: [],
};

export const all_blocks = createAsyncThunk(
  "blocksReducer/allBlocks",
  async (address, thunkAPI) => {
    try {
      return await blocksServices.all_blocks(address);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blockSlice = createSlice({
  name: "allBlocks",
  initialState,
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(all_blocks.fulfilled, (state, action) => {
      state.blocks.push(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = blockSlice.actions;

export default blockSlice.reducer;
