import { createSlice } from "@reduxjs/toolkit";
import {
  getTop5ControvertialTweets,
  getTop5LikedTweets,
  getTweets,
  getTweetsGroupedByDate,
} from "../../actions/tweetsAction";

const initialState = {
  loading: false,
  status: false,
  tweets: [],
  tweetsGroupedByDate: [],
  top5LikedTweets: [],
  top5ControvertialTweets: [],
};
export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: {
    [getTweets.pending.type]: (state) => {
      state.loading = true;
    },
    [getTweets.fulfilled.type]: (state, { payload }) => {
      state.tweets = payload;
    },
    [getTweets.rejected.type]: (state) => {
      state.loading = false;
    },

    [getTweetsGroupedByDate.pending.type]: (state) => {
      state.loading = true;
    },
    [getTweetsGroupedByDate.fulfilled.type]: (state, { payload }) => {
      state.tweetsGroupedByDate = payload;
    },
    [getTweetsGroupedByDate.rejected.type]: (state) => {
      state.loading = false;
    },

    [getTop5LikedTweets.pending.type]: (state) => {
      state.loading = true;
    },
    [getTop5LikedTweets.fulfilled.type]: (state, { payload }) => {
      state.top5LikedTweets = payload;
    },
    [getTop5LikedTweets.rejected.type]: (state) => {
      state.loading = false;
    },

    [getTop5ControvertialTweets.pending.type]: (state) => {
      state.loading = true;
    },
    [getTop5ControvertialTweets.fulfilled.type]: (state, { payload }) => {
      state.top5ControvertialTweets = payload;
    },
    [getTop5ControvertialTweets.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default tweetsSlice.reducer;
