import React from 'react';
import classes from '../styles/styles.css';

const Header = (props) => {
    return (
        <header >
            <div className={classes.logo}>LOGO</div>
            <input type="text"
                    onChange={props.search} />
        </header>
    );
}

export default Header;