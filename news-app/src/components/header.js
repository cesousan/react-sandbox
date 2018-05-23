import React, { Component } from 'react';
import '../styles/styles.css';

class Header extends Component {

    state = {
        keyword: ''
    }

    // trick to bind this to the function setState.
    changeState = this.setState.bind(this);

    render() {
        return (
            <header >
                <div className="logo">LOGO</div>
                <input type="text"
                        onChange={ event => changeStateHandler(this.changeState)({keyword : event.target.value}) } />
            </header>
        )
    }
}

const changeStateHandler = setState => value => setState(value);


export default Header;