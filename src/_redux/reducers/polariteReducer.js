import { createSlice } from "@reduxjs/toolkit";
import {
  getGroupedEcologicalThemes,
  getGroupedEnergeticalThemes,
} from "../../actions/polarite.actions";

const initialState = {
  loading: false,
  status: false,
  groupedEcologicalThemes: [],
  groupedEnergeticalThemes: [],
};
export const polariteSlice = createSlice({
  name: "polarite",
  initialState,
  reducers: {},
  extraReducers: {
    [getGroupedEcologicalThemes.pending.type]: (state) => {
      state.loading = true;
    },
    [getGroupedEcologicalThemes.fulfilled.type]: (state, { payload }) => {
      state.groupedEcologicalThemes = payload;
    },
    [getGroupedEcologicalThemes.rejected.type]: (state) => {
      state.loading = false;
    },

    [getGroupedEnergeticalThemes.pending.type]: (state) => {
      state.loading = true;
    },
    [getGroupedEnergeticalThemes.fulfilled.type]: (state, { payload }) => {
      state.groupedEnergeticalThemes = payload;
    },
    [getGroupedEnergeticalThemes.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default polariteSlice.reducer;
