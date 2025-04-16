import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		addTweeet: (state, action) => {
			state.value.push(action.payload);
		},
		removeTweet: (state, action) => {
			//state.value = state.value.filter(bookmark => bookmark.title !== action.payload.title);
		},
		removeAllTweets: (state) => {
			state.value = [];
		},
	},
});

export const { addTweet, removeTweet, removeAllTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;