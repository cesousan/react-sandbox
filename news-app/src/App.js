import React, { Component } from 'react';

//RESOURCES
import JSON from './assets/db.json';

// COMPONENTS
import Header from './components/header';
import NewsList from './components/newsList';

export default class App extends Component {
    
    state = {
       news : JSON
    }
    
    render() {
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news} />
            </div>
        );
    };
}