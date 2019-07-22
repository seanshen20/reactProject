import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: "dfsfs", name: 'Sean', age: 28 },
      { id: "dfee", name: 'Lu', age: 26 },
      { id: "fff", name: 'Bei', age: 7 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  // watch out the sequence id, event not event, id 
  // if want to use bind
  // the easy way would be create new instance arrow function 
  // changed={(event) => thisChangeHandler(event, index)
  nameChangeHandler = (id, event) => {
    //const persons = [...this.state.persons];
    const persons = this.state.persons.map((person) => {
      if (person.id === id) person.name = event.target.value;
      return person;
    });
    this.setState({persons: persons});
    // const person = persons.find(p => {
    //   return p.id === id;
    // });
    // slice return array

    //const person = this.state.persons.slice(personIndex, personIndex + 1);
    //const person = {...this.state.persons[personIndex]};
    //const persons = [...this.state.persons];
    //persons[personIndex] = person[0];
    //person.name = event.target.value;
    
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person 
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={this.nameChangeHandler.bind(this, person.id)}
              click={this.deletePersonHandler.bind(this, index)}></Person>
          )}
        </div>
      );
    }
    // syntax sugar by using react module 
    // can write js by {}, then tertiary operator works
    return (
      <div className="App">
        <p>hi, I am  a react App</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Yes h1 is rendered!!!'));
  }
}

export default App;
