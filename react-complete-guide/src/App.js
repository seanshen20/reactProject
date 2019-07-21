import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Sean', age: 28 },
      { name: 'Lu', age: 26 },
      { name: 'Bei', age: 7 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('It was clicked');
    // don't do this :this.state.persons[0].name = 'Sean shen';
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: 'Lu', age: 26 },
          { name: 'Bei', age: 7 },
        ]
      }, () => console.log('it was clicked'));
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: event.target.value, age: 28 },
          { name: 'Lu', age: 26 },
          { name: 'Bei', age: 7 },
        ]
      });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    // syntax sugar by using react module 
    return (
      <div className="App">
        <p>hi, I am  a react App</p>
        <button
          style={style} 
          onClick={this.switchNameHandler.bind(this, 'sean shen')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'lucas shen')}
          changed={this.nameChangeHandler}>
            My Hobbies: Table tennis 
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[2].age}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Yes h1 is rendered!!!'));
  }
}

export default App;
