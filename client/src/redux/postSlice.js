import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timelinePost: null,
  currentPost: null,
  loading: false,
  error: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.timelinePost = action.payload;
      state.currentPost = action.payload;
    },
    fetchFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailed,
  like,
  dislike,
  addComment,
} = postSlice.actions;

export default postSlice.reducer;
