import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../../helpers/apis";

export const postMenuForm = createAsyncThunk(
  "add/postMenuForm",
  async (form) => {
    try {
      const res = await apis.addMenu(form);
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

export const addSlice = createSlice({
  name: "add",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postMenuForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postMenuForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload.message;
      })
      .addCase(postMenuForm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error.message;
      });
  },
});

export default addSlice.reducer;
