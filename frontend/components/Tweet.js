import Head from 'next/head';
import styles from '../styles/Tweet.module.css';
import { useState, useEffect } from 'react';

function Tweet () {
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    useEffect(() => {
        setSignInUsername('Mohamed');
        setSignInPassword('Mohamed');
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    console.log(data.username);
                    setSignInUsername(data.username);
                }
            });
    }, []);
    return (
        <div className={styles.Tweet}>
            <Head>
                <title>Tweet</title>
            </Head>
            <h3 style={{color: 'white'}}>Tweet</h3>
            <div>
                <p>{signInUsername}</p>
            </div>
        </div>
    );
}

export default Tweet;