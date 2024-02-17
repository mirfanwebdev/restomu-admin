import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apis from "../../../helpers/apis";

export const postAuthForm = createAsyncThunk(
  "auth/postAuthForm",
  async (form) => {
    try {
      const res = await apis.login(form);
      const username = form.username;
      localStorage.setItem("username", username);
      return res.data;
    } catch (error) {
      // console.log(error.response.data);
      throw error.response.data;
    }
  }
);

const initialState = {
  isLoading: false,
  message: "",
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAuthForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postAuthForm.fulfilled, (state, action) => {
        const token = action.payload.data.token;
        localStorage.setItem("accessToken", token);
        state.isLoading = false;
        state.message = action?.payload?.message;

        // console.log(state.message);
      })
      .addCase(postAuthForm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
        // console.log(state.error);
      });
  },
});

export const { setUsername } = authSlice.actions;
export default authSlice.reducer;
