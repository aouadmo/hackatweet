var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const { checkBody } = require('../modules/checkBody');

router.post('/postatweet', (req, res) => {
    if (!checkBody(req.body, ['tweetContent'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    else {
        const content = req.body.tweetContent;
        const hashtags = content.match(/#\w+/g) || [];
        const newTweet = new Tweet({
            tweetid: Date.now(),
            tweetContent: req.body.tweetContent,
            hashtags: hashtags.map(tag => tag.toLowerCase()),
        });

        newTweet.save().then(newTweet => {
            res.json({ result: true, newTweet });
        });
    }
});

router.get('/all', (req, res) => {
    Tweet.find().sort({ createdAt: -1 }).then(tweets => {
      res.json({ result: true, tweets });
    });
  });

router.get('/trends', async (req, res) => {
    const trends = await Tweet.aggregate([
      { $unwind: "$hashtags" },
      { $group: { _id: "$hashtags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
  
    res.json({ result: true, trends });
  });
  
module.exports = router;

router.get('/hashtag/:tag', (req, res) => {
    const tag = req.params.tag.toLowerCase();
  
    Tweet.find({ hashtags: tag })
      .then(tweets => res.json({ result: true, tweets }))
      .catch(err => res.json({ result: false, error: err.message }));
  });