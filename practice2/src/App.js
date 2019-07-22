import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {string: ""};
  // add handler 
  updateString = (event) => this.setState({ string: event.target.value });
  
  deleteChar = (index) => {
    let list = this.state.string.split("");
    list.splice(index, 1);
    this.setState({string: list.join("")});
  }

  render() {
    let charList = (
      <div>
        {this.state.string.split('').map((char, index) => 
          <Char 
            char={char} 
            key={index} 
            delete={this.deleteChar.bind(this, index)}></Char>)}
      </div>
    );

    return (
      <div className="App">
        <input type="text" value={this.state.string} onChange={this.updateString} />
        <p>{this.state.string.length}</p>
        <Validation len={this.state.string.length}></Validation>
        {charList}
      </div>
    );
  };

}

export default App;
