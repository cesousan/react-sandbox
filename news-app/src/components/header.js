import React, { Component } from 'react';
import '../styles/styles.css';

class Header extends Component {

    state = {
        keyword: 'initial'
    }

    // trick to bind this to the function setState.
    changeState = this.setState.bind(this);

    render() {
        return (
            <header >
                <div className="logo">LOGO</div>
                <input type="text"
                        onChange={ event => inputChangeHandler(event.target.value) (this.changeState) } />
            </header>
        )
    }
}

const inputChangeHandler = value => setState => setState({keyword: value});


export default Header;