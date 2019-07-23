import React from 'react';
import Person from './Person/Person';

const Persons = (props) => 
    props.persons.map((person, index) =>
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>{props.changed(person.id, event)}}
              click={() => props.delete(index)}></Person>
          )


export default Persons;
