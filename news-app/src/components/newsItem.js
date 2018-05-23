import React from 'react';
import classes from '../styles/styles.css'

const NewsItem = ({item}) => {
    return (
        <div className={classes.news-item}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>)
}


export default NewsItem;