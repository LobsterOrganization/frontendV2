import { createSlice } from "@reduxjs/toolkit";
import { getTop10UsedWordsAvril } from "../../actions/occurenceAvril.actions";
const initialState = {
  loading: false,
  status: false,
  top10UsedWordsAvril: [],
};
export const occurenceAvrilSlice = createSlice({
  name: "occurenceAvril",
  initialState,
  reducers: {},
  extraReducers: {
    [getTop10UsedWordsAvril.pending.type]: (state) => {
      state.loading = true;
    },
    [getTop10UsedWordsAvril.fulfilled.type]: (state, { payload }) => {
      state.top10UsedWordsAvril = payload;
    },
    [getTop10UsedWordsAvril.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default occurenceAvrilSlice.reducer;
