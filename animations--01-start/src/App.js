import React, { Component } from "react";
import { Transition } from 'react-transition-group';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModel = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModel = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {

    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button"
          onClick={
            () => this.setState(prevState => (
              { showBlock: !prevState.showBlock }
            ))}>Toggle</button>
        <br />
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.showBlock}
          timeout={400}>
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: `opacity 1s ease-out`,
                opacity: state === 'exiting' || state === 'entering' ? 0 : 1
              }}
            />
          )}
        </Transition>

        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModel} />
        {this.state.modalIsOpen ? (<Backdrop show />) : null}

        <button
          className="Button"
          onClick={this.showModel}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
