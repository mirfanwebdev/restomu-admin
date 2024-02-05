import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {},
});

export default menuSlice.reducer;
