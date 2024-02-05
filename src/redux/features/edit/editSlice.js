import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  detail: {},
  error: null,
};
export const editSlice = createSlice({
  name: "edit",
  initialState: initialState,
  reducers: {},
});

export default editSlice.reducer;
