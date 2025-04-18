import styles from '../styles/Tweet.module.css';
import { useDispatch } from 'react-redux';
import { likeTweet, deleteTweet } from '../reducers/Tweets';
import Image from 'next/image';
import Link from 'next/link';

function Tweet({ id, username, firstName, time, content, hashtag, currentUser  }) {
    const isOwner = username;
    const parts = content.split(/(#[\w]+)/g); // separate hashtags
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(likeTweet(id));
    };

    const handleDelete = () => {
        dispatch(deleteTweet(id));
    };
    let formattedContent = parts.map((part, index) => {
        if (part.startsWith('#')) {
            const tag = part.substring(1); // remove #
            return (
                <Link key={index} href={`/hashtag/${tag}`}>
                    <span style={{ color: '#1DA1F2', fontWeight: 'bold', cursor: 'pointer' }}>{part}</span>
                </Link>
            );
        } else {
            return <span key={index}>{part}</span>;
        }
    });

    return (
        <div className={styles.tweet}>
            <div className={styles.tweetHeader}>
                <Image
                    src="/../public/images/avatar.png"
                    alt="User avatar"
                    width={48}
                    height={48}
                    className={styles.avatar}
                />
                <div className={styles.userInfo}>
                    <span className={styles.username}>{firstName}</span>
                    <span className={styles.handle}>@{username}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.timestamp}>{time}</span>
                </div>
            </div>
            <div className={styles.tweetContent}>
                {formattedContent} {hashtag && <span className={styles.hashtag}>{hashtag}</span>}
            </div>
            <div className={styles.tweetActions}>
                <span style={{ cursor: 'pointer' }} onClick={handleLike}>❤️</span>
                {isOwner && <span style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={handleDelete}>🗑️</span>}
            </div>
        </div>
    );
}

export default Tweet;
