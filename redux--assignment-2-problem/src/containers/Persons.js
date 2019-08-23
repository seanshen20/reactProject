import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {
    state = {
        persons: []
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        this.setState((prevState) => {
            return { persons: prevState.persons.concat(newPerson) }
        });
    }

    personDeletedHandler = (personId) => {
        this.setState((prevState) => {
            return { persons: prevState.persons.filter(person => person.id !== personId) }
        });
    }

    render() {
        return (
            <div>
                {/* <AddPerson personAdded={this.props.onAdd} /> */}
                <AddPerson personAdded={(name, age) => this.props.onAdd(name, age)} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDelete(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (name, age) => {
            dispatch({
                type: 'ADD',
                value: {
                    id: Math.random(), // not really unique but good enough here!
                    name: name,
                    age: age 
                } 
            })
        },
        onDelete: (id) => {
            dispatch({
                type: 'DELETE',
                value: id
            })
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);

