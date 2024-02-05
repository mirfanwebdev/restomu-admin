import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {},
});

export default registerSlice.reducer;
