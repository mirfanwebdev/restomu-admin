import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: {},
};

export const addSlice = createSlice({
  name: "add",
  initialState: initialState,
  reducers: {},
});

export default addSlice.reducer;
