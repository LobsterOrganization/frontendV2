import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendApi } from "../api";
import { formatDate } from "../_helpers/Date/date.formatter";

export const getGroupedEcologicalThemes = createAsyncThunk(
  "ecologicalThemesCount/post",
  async (values, { rejectWithValue }) => {
    try {
      let formattedDate = formatDate(values.ecologicalThemesDateValue);
      const { data } = await backendApi.post("/ecologicalThemesCount", {
        date: formattedDate,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGroupedEnergeticalThemes = createAsyncThunk(
  "energeticalThemesCount/post",
  async (values, { rejectWithValue }) => {
    try {
      let formattedDate = formatDate(values.energeticalThemesDateValue);
      const { data } = await backendApi.post("/energeticalThemesCount", {
        date: formattedDate,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
