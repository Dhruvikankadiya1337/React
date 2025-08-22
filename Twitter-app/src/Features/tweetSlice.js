import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    addTweet: (state, action) => {
      state.push(action.payload);
    },
    deleteTweet: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    updateTweet: (state, action) => {
      const tweet = state.find(t => t.id === action.payload.id);
      if (tweet) tweet.content = action.payload.content;
    },
    toggleLike: (state, action) => {
      const tweet = state.find(t => t.id === action.payload);
      if (tweet) tweet.likes += 1;
    }
  }
});

export const { addTweet, deleteTweet, updateTweet, toggleLike } = tweetSlice.actions;
export default tweetSlice.reducer;
