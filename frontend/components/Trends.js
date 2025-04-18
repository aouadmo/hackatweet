import React from 'react';
import { useSelector } from 'react-redux';
import { selectTrendingHashtags } from '../redux/selectors/trendsSelector';

function Trends(){

    // Récupérer le #
    const extractHashtags = (text) => {
    return text.match(/#\w+/g)?.map(tag => tag.slice(1).toLowerCase()) || [];
    };
//Récupération des tweets + extractHashtag
    const trendingHashtags = createSelector(
        (state) => state.tweets, 
        (tweets) => {
        const allTags = tweets.flatMap(tweet => extractHashtags(tweet.content));
      
          const countMap = {};
          allTags.forEach(tag => {
            countMap[tag] = (countMap[tag] || 0) + 1;
          });
          return Object.entries(countMap)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count);
      }
    );

  return (
    <div className={styles.trendContainer}>
      <h2 className={styles.title}>Trends</h2>
      <ul>
        {trends.map((trend, index) => (
          <li key={index} className={styles.listedTrends}>
            <span className={styles.trendName}>#{trend.name}</span>
            <span className={styles.trendCount}>{trend.count} Tweet{trend.count > 1 ? 's' : ''}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 

export default Trends;