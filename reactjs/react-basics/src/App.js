import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Wojtek!</h1>
        <Person name="Max" age="28"/>
        <Person name="Wojtek" age="25"> My Hobbies: Music </Person>
        <Person name="Asia" age="17"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi Wojtek!'));
  }
}

export default App;
