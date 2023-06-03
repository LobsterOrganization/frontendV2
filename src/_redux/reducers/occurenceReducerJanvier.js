import { createSlice } from "@reduxjs/toolkit";
import { getTop10UsedWords } from "../../actions/occurenceJanvier.actions";
const initialState = {
  loading: false,
  status: false,
  top10UsedWords: [],
};
export const occurenceSlice = createSlice({
  name: "occurence",
  initialState,
  reducers: {},
  extraReducers: {
    [getTop10UsedWords.pending.type]: (state) => {
      state.loading = true;
    },
    [getTop10UsedWords.fulfilled.type]: (state, { payload }) => {
      state.top10UsedWords = payload;
    },
    [getTop10UsedWords.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default occurenceSlice.reducer;
