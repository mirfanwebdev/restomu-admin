import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apis from "../../../helpers/apis";

export const fetchMenu = createAsyncThunk(
  "menu/fetchMenu",
  async (param = { name: "", type: "", page: 1 }) => {
    try {
      const res = await apis.getMenu(param);
      const data = res.data.data;
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const initialState = {
  menus: [],
  currentPage: 1,
  isLoading: false,
  error: "",
};
export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.menus = [];
        state.isLoading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.menus = action.payload.Data;
        state.currentPage = action.payload.currentPage;
        state.isLoading = false;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.error = action?.error?.message;
      });
  },
});

export default menuSlice.reducer;
