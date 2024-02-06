import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apis from "../../../helpers/apis";

export const editMenuById = createAsyncThunk(
  "edit/editMenuById",
  async (id, form) => {
    try {
      const res = await apis.editMenu(id, form);
      return res;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  isLoading: false,
  detail: {},
  error: null,
};
export const editSlice = createSlice({
  name: "edit",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editMenuById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editMenuById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    });
    builder.addCase(editMenuById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default editSlice.reducer;
