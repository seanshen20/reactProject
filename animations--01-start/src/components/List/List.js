import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

import './List.css';

class List extends Component {
    state = {
        items: {}
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: {
                    ...prevState.items,
                    [+new Date()]: Math.floor(Math.random() *100) 
                }
            }
        })
    }

    removeItemHandler = (index) => {
        this.setState((prevState) => {
            let newState = {...prevState.items}
            delete newState[index]
            return {
                items: {...newState}
            }
        })
    }

    render() {
        const listItems = Object.keys(this.state.items).map(key => (
            <CSSTransition
                classNames="move"
                timeout={1000}
                key={key}>
                <li
                    className="ListItem"
                    onClick={() => this.removeItemHandler(key)}>{this.state.items[key]}</li>
            </CSSTransition>

        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup
                    component="ul"
                    className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;