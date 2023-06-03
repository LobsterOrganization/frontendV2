import {createAsyncThunk} from '@reduxjs/toolkit';
import { backendApi } from '../api';

export const getTrends = createAsyncThunk(
    'trends/get',
    async (values, {rejectWithValue}) => {
        try {
            const {data} = await backendApi.get('/trends');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
