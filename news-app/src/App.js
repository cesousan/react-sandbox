import React, { Component } from 'react';

//RESOURCES
import JSON from './assets/db.json';

// COMPONENTS
import Header from './components/header';
import NewsList from './components/newsList';

export default class App extends Component {
    
    state = {
        news : JSON,
        filteredNews: []
    }
    
    search = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.news.filter(item =>
            item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        this.setState({filteredNews: filtered})
    }

    render() {
        let displayedNews = this.state.filteredNews.length
        ? this.state.filteredNews
        : this.state.news
        
        return (
            <div>
                <Header search={this.search}/>
                <NewsList news={displayedNews} />
            </div>
        );
    };
}