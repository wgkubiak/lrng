import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Wojtek', age: 29 },
      { name: 'Asia', age: 17 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Wojciech', age: 29 },
        { name: 'Joanna', age: 17 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Wojtek!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Music </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi Wojtek!'));
  }
}

export default App;
