import { createSlice } from "@reduxjs/toolkit";
import { getNodes } from "../../actions/nodesAction";

const initialState = {
    loading: false,
    status: false,
    nodes: [],
};
export const nodesSlice = createSlice({
    name: 'nodes',
    initialState,
    reducers: {},
    extraReducers: {

        [getNodes.pending.type]: (state) => {
            state.loading = true;
        },
        [getNodes.fulfilled.type]: (state, {payload}) => {
            state.nodes = payload;
        },
        [getNodes.rejected.type]: (state) => {
            state.loading = false;
        },
    },
});

export default nodesSlice.reducer;