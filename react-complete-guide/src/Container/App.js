import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Persons/Persons';
import CockPit from '../Cockpit/Cockpit';
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
    this.setState({ persons: persons });
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
    this.setState({ persons: persons });
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
    let persons = null;
    if (this.state.showPersons) {
      persons = 
        <Persons 
          persons={this.state.persons}
          changed={this.nameChangeHandler} 
          delete={this.deletePersonHandler}>
        </Persons>;      
    }
    // syntax sugar by using react module 
    // can write js by {}, then tertiary operator works
    return (
        <div className={classes.App}>
          <CockPit 
            persons={this.state.persons}
            click={this.togglePersonsHandler}
            showPersons={this.state.showPersons}></CockPit>
          {persons}
        </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Yes h1 is rendered!!!'));
  }
}

export default App;
