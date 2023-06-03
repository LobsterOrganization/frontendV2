import { createSlice } from "@reduxjs/toolkit";
import { getTrends } from "../../actions/trendsAction";

const initialState = {
    loading: false,
    status: false,
    trends: [],
};
export const trendsSlice = createSlice({
    name: 'trends',
    initialState,
    reducers: {},
    extraReducers: {

        [getTrends.pending.type]: (state) => {
            state.loading = true;
        },
        [getTrends.fulfilled.type]: (state, {payload}) => {
            state.trends = payload;
        },
        [getTrends.rejected.type]: (state) => {
            state.loading = false;
        },
    },
});

export default trendsSlice.reducer;
