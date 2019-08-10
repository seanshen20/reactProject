import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

export default (props) => (
    <div className={classes.Logo}>
        <img src={logo} alt="Burger"/>
    </div>
);
