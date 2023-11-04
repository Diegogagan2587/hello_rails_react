import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;