import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Setting the events in the state.
    this.getEvents()
    .then(data => data.json())
    .then(events => this.setState({events: events}))
    .catch(error => console.error(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
  getEvents() {
    return new Promise(function(resolve, reject) {
      fetch('/users')
      .then(data => resolve(data))
      .catch(err => reject("Error!"));
    } );
  }
}

class Calendar {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

function Day(props) {
  return <h3>{props.title}</h3>;
}

function Event(props) {

}

export default App;