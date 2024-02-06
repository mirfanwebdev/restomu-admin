import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apis from "../../../helpers/apis";

export const postRegisterForm = createAsyncThunk(
  "register/postRegisterForm",
  async (form) => {
    try {
      const res = await apis.register(form);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  isLoading: false,
  success_message: "",
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRegisterForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success_message = action?.payload.message;
      })
      .addCase(postRegisterForm.rejected, (state, action) => {
        state.isLoading = false;
        state.data = {};
        state.error = action?.error.message;
      });
  },
});

export default registerSlice.reducer;
