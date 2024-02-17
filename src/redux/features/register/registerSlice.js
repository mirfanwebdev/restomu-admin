import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apis from "../../../helpers/apis";

export const postRegisterForm = createAsyncThunk(
  "register/postRegisterForm",
  async (form) => {
    try {
      const res = await apis.register(form);
      return res.data;
    } catch (error) {
      throw error.response.data;
      // console.log(error.response.data);
    }
  }
);

const initialState = {
  isLoading: false,
  message: "",
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    clear: (state) => {
      state.message = "";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRegisterForm.fulfilled, (state, action) => {
        const username = action?.payload.data.username;
        localStorage.setItem("username", username);
        state.isLoading = false;
        state.message = action?.payload.message;
      })
      .addCase(postRegisterForm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error.message;
      });
  },
});

export const { clear } = registerSlice.actions;

export default registerSlice.reducer;
