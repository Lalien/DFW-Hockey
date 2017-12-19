import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Setting the events in the state.
    this.state = {
      events: []
    };
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
        <Calendar events={this.state.events}/>
      </div>
    );
  }
  getEvents() {
    return new Promise(function(resolve, reject) {
      fetch('/events')
      .then(data => resolve(data))
      .catch(err => reject("Error!"));
    } );
  }
}

function Calendar(props) {
  return (
    <div>{props.events.map(event => <Event data={event} key={event._id}/> )}</div>
  );
}

function Day(props) {
  
}

function Event(props) {
  return (
    <div>{props.data.title} - {props.data.date} - {props.data.location} </div>
  );
}

export default App;