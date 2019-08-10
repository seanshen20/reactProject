import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

export default (props) => (
    <Fragment>
        <Backdrop 
            show={props.show}
            clicked={props.modalClosed}></Backdrop>
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateX(0)' : 'translateX(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Fragment>
);
