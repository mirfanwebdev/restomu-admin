import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success_message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
