import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerClosedHandler = () => {
        this.setState((prev) => 
            ({showSideDrawer: !prev.showSideDrawer})
        );
    }

    render() {
        return (
            <>
                <Toolbar 
                    isAuth = {this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerClosedHandler}/>
                <SideDrawer 
                    isAuth = {this.props.isAuthenticated}
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }


}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);