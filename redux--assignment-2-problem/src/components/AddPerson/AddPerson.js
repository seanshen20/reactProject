import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }
    
    nameChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    ageChangeHandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div className="AddPerson">
                <input onChange={this.nameChangeHandler} value={this.state.name} type="text" placeholder="Name" />
                <input onChange={this.ageChangeHandler} value={this.state.age} type="number" placeholder="Age" />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
   
}
export default AddPerson;