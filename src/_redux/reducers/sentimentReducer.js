import { createSlice } from "@reduxjs/toolkit";
import { getTrends } from "../../actions/trendsAction";
import { getGroupedSentiment } from "../../actions/sentimentAction";

const initialState = {
  loading: false,
  status: false,
  sentiments: [],
};
export const sentimentsSlice = createSlice({
  name: "sentiments",
  initialState,
  reducers: {},
  extraReducers: {
    [getGroupedSentiment.pending.type]: (state) => {
      state.loading = true;
    },
    [getGroupedSentiment.fulfilled.type]: (state, { payload }) => {
      state.sentiments = payload;
    },
    [getGroupedSentiment.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default sentimentsSlice.reducer;
