const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  tweetid: Date,
  tweetContent: String,
  hashtags: [String],
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;