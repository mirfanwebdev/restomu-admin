import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apis from "../../../helpers/apis";

export const deleteMenuById = createAsyncThunk(
  "delete/deleteMenuById",
  async (id) => {
    try {
      const res = await apis.delMenu(id);
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const initialState = {
  isLoading: false,
  message: "",
  error: "",
};
export const deleteSlice = createSlice({
  name: "delete",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteMenuById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMenuById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload.message;
      })
      .addCase(deleteMenuById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error.message;
      });
  },
});

export default deleteSlice.reducer;
