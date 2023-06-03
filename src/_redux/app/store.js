import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trendsReducer from "../reducers/trendsReducer";
import nodesReducer from "../reducers/nodesReducer";
import tweetsReducer from "../reducers/tweetsReducer";
import occurenceReducer from "../reducers/occurenceReducer";
import sentimentReducer from "../reducers/sentimentReducer";
import polariteReducer from "../reducers/polariteReducer";
const store = configureStore({
  reducer: {
    nodes: nodesReducer,
    trends: trendsReducer,
    tweets: tweetsReducer,
    occurence: occurenceReducer,
    sentiments: sentimentReducer,
    polarite: polariteReducer,
  },
});

export default store;
