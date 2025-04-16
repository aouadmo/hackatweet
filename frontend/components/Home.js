import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Tweet from './Tweet';

function Home() {
    const [characterCounter, setCharacterCounter] = useState(0);
    const TweetLengthCounter = (event) => {
        setCharacterCounter(event.target.value.length);
    };
    return (
        <div className={styles.HomePage}>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles.HomePage}>
                <h3 style={{color: 'white'}}>Home</h3>
                <div>
                    <textarea name="postContent" placeholder="What's up?" className={styles.TextBox} maxLength={280} onChange={TweetLengthCounter}/>
                    <p style={{color: 'white'}}>{characterCounter}/280</p>
                </div>
                <div>
                    <button className={styles.TweetButton}>Tweet</button>
                </div>
            </div>
            <div style={{ marginTop: '30px', padding: '15px', borderTop: '1px solid #eee' }}>
                <Tweet/>
            </div>
        </div>
    );
}

export default Home;