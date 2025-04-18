import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tweets: [], 
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    likeTweet: (state, action) => {
      const tweet = state.tweets.find(t => t.id === action.payload);
      if (tweet) {
        tweet.liked = !tweet.liked; // toggle like
      }
    },
    deleteTweet: (state, action) => {
      state.tweets = state.tweets.filter(t => t.id !== action.payload);
    },
    setTweets: (state, action) => {
      state.tweets = action.payload;
    },
  },
});

export const { likeTweet, deleteTweet, setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
