import React, { Component } from 'react';
import classes from './App.module.css';
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
    let btnClass = '';
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

      btnClass = classes.Red;
      
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    // syntax sugar by using react module 
    // can write js by {}, then tertiary operator works
    return (
        <div className={classes.App}>
          <p>hi, I am  a react App</p>
          <p className={assignedClasses.join(" ")}>This is really working.</p>
          <button className={btnClass}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Yes h1 is rendered!!!'));
  }
}

export default App;
