import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Tweet from './Tweet';
import LogoutButton from './LogoutButton'; // Ensure this path is correct and the component exists
import Link from 'next/link';

function Home() {
    const [trends, setTrends] = useState([]);
    function getTimeAgo(timestamp) {
        const secondsAgo = Math.floor((Date.now() - timestamp) / 1000);

        if (secondsAgo < 60) return `${secondsAgo}s ago`;
        if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)}m ago`;
        if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)}h ago`;
        return `${Math.floor(secondsAgo / 86400)}d ago`;
    }

    useEffect(() => {
        // Load trends
        fetch('http://localhost:3000/tweets/trends')
            .then(res => res.json())
            .then(data => {
                if (data.result) setTrends(data.trends);
            });

        // Load existing tweets
        fetch('http://localhost:3000/tweets/all')
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    const formattedTweets = data.tweets.map(tweet => ({
                        id: tweet._id,
                        username: 'Mohamed',
                        firstName: 'Mohamed',
                        time: getTimeAgo(new Date(tweet.tweetid).getTime()),
                        content: tweet.tweetContent,
                        hashtags: tweet.hashtags || [],
                    }));
                    setTweetsList(formattedTweets);
                }
            });
    }, []);

    const [characterCounter, setCharacterCounter] = useState(0);
    const [tweetContent, setTweetContent] = useState('');
    const [tweetsList, setTweetsList] = useState([]);

    const handleTweetChange = (event) => {
        const value = event.target.value;
        setTweetContent(value);
        setCharacterCounter(value.length);
    };

    const addTweet = () => {
        if (tweetContent.trim() === '') return;

        fetch('http://localhost:3000/tweets/postatweet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tweetContent }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    const tweet = data.newTweet;
                    const newTweet = {
                        id: tweet._id,
                        username: 'Mohamed', // or from auth
                        firstName: 'Mohamed',
                        time: getTimeAgo(new Date(tweet.tweetid).getTime()),
                        content: tweet.tweetContent,
                        hashtags: tweet.hashtags || [],
                    };
                    console.log("tweetid:", tweet.tweetid, typeof tweet.tweetid);
                    setTweetsList(prev => [newTweet, ...prev]); // add to list
                    setTweetContent('');
                    setCharacterCounter(0);

                    // Optional: refresh trends
                    fetch('http://localhost:3000/tweets/trends')
                        .then(res => res.json())
                        .then(data => {
                            if (data.result) setTrends(data.trends);
                        });
                }
            });
    };


    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles.leftPanel}>
                <LogoutButton onLogout={() => window.location.href = '/login'} />
            </div>
            <div className={styles.middlePanel}>
                <div className={styles.tweetBox}>
                    <h3>Home</h3>
                    <input type="text" name="postContent" placeholder="What's up?" className={styles.textArea} maxLength={280} value={tweetContent}
                        onChange={handleTweetChange} />
                    <p>{characterCounter}/280</p>
                    <div>
                        <button className={styles.tweetButton} onClick={addTweet}>Tweet</button>
                    </div>
                </div>
                {tweetsList.map(tweet => (
                    <Tweet
                        id={tweet.id}
                        username={tweet.username}
                        firstName={tweet.firstName}
                        time={tweet.time}
                        content={tweet.content}
                        hashtag={tweet.hashtag}
                    />
                ))}
            </div>
            <div className={styles.rightPanel}>
                <h3>Trends</h3>
                <ul>
                    {trends.map((trend, index) => (
                        <li key={index}>
                            <Link key={index} href={`/hashtag/${trend._id.slice(1)}`}>
                                <span style={{ color: '#1DA1F2', cursor: 'pointer' }}>{trend._id}</span>
                            </Link> ({trend.count})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;