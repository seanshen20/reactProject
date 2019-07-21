import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    user: [
      {
        name: 'sean',
        password: 111
      },
      {
        name: 'lu',
        password: 222
      },
      {
        name: 'lucas',
        password: 333
      }
    ]
  }

  name = '';

  changeHandler = (event) => {
    this.setState({
      user: [
        {
          name: this.name,
          password: 111
        },
        {
          name: 'lu',
          password: event.target.value
        },
        {
          name: 'lucas',
          password: 333
        }
      ]
    })
  }
  clickHandler = (name) => {
    this.name = name;
    this.setState({
      user: [
        {
          name: name,
          password: 111
        },
        {
          name: 'lu',
          password: 222
        },
        {
          name: 'lucas',
          password: 333
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <p> Practice 1</p>
        <UserInput password={this.state.user[1].password} passwordChange={this.changeHandler}/>
        <UserOutput click={this.clickHandler.bind(this, 'sean shen')} name={this.state.user[0].name} password={this.state.user[0].password}></UserOutput>
        <UserOutput name={this.state.user[1].name} password={this.state.user[1].password}></UserOutput>
        <UserOutput name={this.state.user[2].name} password={this.state.user[2].password}></UserOutput>

      </div>
    )
  }



}

export default App;
