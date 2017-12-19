import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Allowing the state to be accessed from the setActiveElement method
    this.setActiveEvent = this.setActiveEvent.bind(this);
    // Setting the events in the state.
    this.state     = {
      events       : [],
      active_event : null
    };
    this.getEvents()
    .then(data => data.json())
    .then(events => this.setState({events: events}))
    .catch(error => console.error(error));
  }
  render() {
    let panel = null;
    if (this.state.active_event != null)
      panel = <ActivePanel id={this.state.active_event}/>;
    return (
      <div className="App">
        {panel}
        <Calendar events={this.state.events} eventClickHandler={this.setActiveEvent}/>
      </div>
    );
  }
  getEvents() {
    return new Promise(function(resolve, reject) {
      fetch('/events')
      .then(data => resolve(data))
      .catch(err => reject("Error!"));
    });
  }
  setActiveEvent(e) {
    e.preventDefault();
    this.setState({
      active_event: e.target.id
    });
  }
}
class ActivePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
    fetch('/events/get-event?id=' + props.id)
    .then(res => res.json())
    .then(data => this.setState({
      'title': data.title,
      'date' : data.date
      })
    );
  }
  render() {
    return(
      <div>
        {this.state.title} - {this.state.date}
      </div>
    );
  }
}
function Calendar(props) {
  return <div>{props.events.map(event => <Event data={event} key={event._id} handler={props.eventClickHandler}/> )}</div>;
}

class Event extends Component {
  render() {
    return (
      <div>
        <a href="#" id={this.props.data._id} onClick={this.props.handler}>{this.props.data.title}</a> - {this.props.data.date} - {this.props.data.location} 
      </div>
    );
  }
}

export default App;