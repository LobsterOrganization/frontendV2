import {createAsyncThunk} from '@reduxjs/toolkit';
import { backendApi } from '../api';

export const getNodes = createAsyncThunk(
    'nodes/get',
    async (values, {rejectWithValue}) => {
        try {
            const {data} = await backendApi.get('/nodes');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
