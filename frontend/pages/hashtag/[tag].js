import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css'; // or adjust if needed
import Tweet from '../../components/Tweet'; // your reusable tweet component

function HashtagPage() {
  const router = useRouter();
  const { tag } = router.query;

  const [tweets, setTweets] = useState([]);
  const [trends, setTrends] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch tweets with the hashtag
  useEffect(() => {
    if (!tag) return;

    fetch(`http://localhost:3000/tweets/hashtag/${tag}`)
      .then(res => res.json())
      .then(data => {
        if (data.result) setTweets(data.tweets);
        else setTweets([]);
      });

    fetch('http://localhost:3000/tweets/trends')
      .then(res => res.json())
      .then(data => {
        if (data.result) setTrends(data.trends);
      });

    setSearch(tag);
  }, [tag]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/hashtag/${search.trim().toLowerCase()}`);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>#{tag} - Hashtag</title>
      </Head>

      {/* Left Panel */}
      <div className={styles.leftPanel} onClick={() => router.push('/')}>
        <h2 style={{ cursor: 'pointer' }}>Home</h2>
        Signin
      </div>

      {/* Middle Panel */}
      <div className={styles.middlePanel}>
        <h3 className={styles.textArea}>#{tag}</h3>
        <form onSubmit={handleSearchSubmit} style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search another hashtag"
            className={styles.textArea}
          />
          <button type="submit" className={styles.tweetButton}>
            Search
          </button>
        </form>

        {tweets.length === 0 ? (
          <p className={styles.textArea}>No tweets found with #{tag}</p>
        ) : (
          tweets.map(tweet => (
            <Tweet
              key={tweet._id}
              username="Mohamed"
              firstName="Mohamed"
              time={getTimeAgo(new Date(tweet.tweetid).getTime())}
              content={tweet.tweetContent}
              hashtags={tweet.hashtags}
            />
          ))
        )}
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <h3>Trends</h3>
        <ul>
          {trends.map((trend, index) => (
            <li
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => router.push(`/hashtag/${trend._id}`)}
            >
              {trend._id} ({trend.count})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HashtagPage;


