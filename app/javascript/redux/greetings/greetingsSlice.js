import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// we get the initial state from the greetings Api
const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  const response = await axios.get('/api/v1/greetings');
  return response.data;
});

// we set the initial state
const initialState = {
  greetings: [],
  status: null,
};

//then we create the slice
const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {},
    extraReducers(builder): {
        builder
            .addCase(getGreetings.pending, (state, action) => {
            state.status = 'loading';
            })
            .addCase(getGreetings.fulfilled, (state, { payload }) => {
            state.greetings = payload;
            state.status = 'success';
            })
            .addCase(getGreetings.rejected, (state, action) => {
            state.status = 'failed';
            });
    }
});

export { getGreetings };
export default greetingsSlice.reducer;

