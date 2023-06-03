import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendApi } from "../api";

export const getTop10UsedWords = createAsyncThunk(
  "top10UsedWords/get",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await backendApi.get("/top10UsedWords");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
