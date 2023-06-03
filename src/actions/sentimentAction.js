import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendApi } from "../api";
import { formatDate } from "../_helpers/Date/date.formatter";

export const getGroupedSentiment = createAsyncThunk(
  "groupedSentiment/post",
  async (values, { rejectWithValue }) => {
    try {
      let formattedDate = formatDate(values.sentimentPieChartDateValue);
      const { data } = await backendApi.post("/groupedSentiment", {
        date: formattedDate,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
