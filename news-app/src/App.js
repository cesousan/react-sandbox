import React, { Component } from 'react';

// COMPONENTS
import Header from './components/header';
import NewsList from './components/newsList';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NewsList/>
            </div>
        );
    };
}