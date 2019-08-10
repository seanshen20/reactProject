import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';

// modify the height in css style={{..css}}
// another approach: wrap div and overwrite in module.css
export default (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        
        <nav>
            <NavigationItems />
        </nav>
    </header>
);
