import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timelinePost: null,
  timelinePostOwner: null,
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
    },
    fetchFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
    // like: (state, action) => {
    //   if (!state.timelinePostOwner.likes.includes(action.payload)) {
    //     state.timelinePostOwner.likes.push(action.payload);

    //     state.timelinePostOwner.dislikes.splice(
    //       state.timelinePostOwner.dislikes.findIndex(
    //         (userId) => userId === action.payload
    //       ),
    //       1
    //     );
    //   }
    // },
    // dislike: (state, action) => {
    //   if (!state.timelinePostOwner.dislikes.includes(action.payload)) {
    //     state.timelinePostOwner.dislikes.push(action.payload);

    //     state.timelinePostOwner.likes.splice(
    //       state.timelinePostOwner.likes.findIndex(
    //         (userId) => userId === action.payload
    //       ),
    //       1
    //     );
    //   }
    // },
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
