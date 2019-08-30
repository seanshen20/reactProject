import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

// modify the height in css style={{..css}}
// another approach: wrap div and overwrite in module.css
export default (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle click={props.drawerToggleClicked}></DrawerToggle>
        <div className={classes.Logo}>
            <Logo />
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuth={props.isAuth}/>
        </nav>
    </header>
);
