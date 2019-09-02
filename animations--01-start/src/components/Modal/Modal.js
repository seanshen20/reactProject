import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';

const modal = (props) => {
    const animationTiming = {
        enter: 400,
        exit: 2000
      }
    return (
        <Transition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}>
            {state => {
                // async 
                const classes = ['Modal']
                classes.push(state === 'entering'
                    ? "ModalOpen"
                    : state === 'exiting' ? 'ModalClosed' : null)
                return (
                    <div className={classes.join(' ')}>
                        <h1>A Modal</h1>
                        <h2>{classes}</h2>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                )

                }
            }

        </Transition>
    )
}



export default modal;