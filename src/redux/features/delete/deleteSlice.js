import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};
export const deleteSlice = createSlice({
  name: "delete",
  initialState: initialState,
  reducers: {},
});

export default deleteSlice.reducer;
