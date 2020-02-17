import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Wojtek', age: 29 },
      { name: 'Asia', age: 17 }
    ],
    otherState: 'some other value'
  });

  const [ otherState, setOtherState ] = useState('some state');

  // Replacing, not updating. otherState isn't there anymore
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Wojciech', age: 29 },
        { name: 'Joanna', age: 17 }
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi Wojtek!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Music </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;


