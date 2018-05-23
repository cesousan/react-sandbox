import React from 'react';

import NewsItem from './newsItem';


const NewsList = (props) => {
    const items = props.news.map((item) => {
        return (
            <NewsItem item={item} key={item.id} />
        );
    })
    

    return (
        <div>
            {props.children}
            {items}
        </div>
    );
}

export default NewsList;