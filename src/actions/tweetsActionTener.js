// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { backendApi } from "../api";
// import moment from "moment";
// import { formatDate } from "../_helpers/Date/date.formatter";
// export const getTweets = createAsyncThunk(
//   "tweets/get",
//   async (values, { rejectWithValue }) => {
//     try {
//       const { data } = await backendApi.get("/tweets");
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const getTweetsGroupedByDate = createAsyncThunk(
//   "tweetsGroupedByDate/post",
//   async (values, { rejectWithValue }) => {
//     try {
//       let formattedDate = formatDate(values.tweetBarChartDateValue);
//       const { data } = await backendApi.post("/tweetsGroupedByDate", {
//         date: formattedDate,
//       });
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const getTop5LikedTweets = createAsyncThunk(
//   "top5LikedTweets/post",
//   async (values, { rejectWithValue }) => {
//     try {
//       let startDate = formatDate(values.startDate);
//       let endDate = formatDate(values.endDate);
//       console.log('Start date after formatting:', startDate);
//       console.log('End date after formatting:', endDate);

//       const { data } = await backendApi.post("/top5LikedTweets", {
//         startDate,
//         endDate
//       });
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
    
//   }
// );

// export const getTop5ControversialTweets = createAsyncThunk(
//   "top5ControversialTweets/post",
//   async (values, { rejectWithValue }) => {
//     try {
//       let startDate = formatDate(values.startDate);
//       let endDate = formatDate(values.endDate);
//       const { data } = await backendApi.post("/top5ControversialTweets", {
//         startDate,
//         endDate
//       });
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
