import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Stateful from './Stateful/Stateful';
import FunctionComponent from './FunctionComponent/FunctionComponent';

function App() {
  /*
  // original source code created by 'yarn create react-app'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */

  /*
  // this function can has only one 'html' element
  return (
    // this code is JSX
    // can't use 'class' attribute because is a reserved word, instead use 'className' from JSX attribute
    <div className="App">
      <h1>Hi, I'm a React App</h1>
    </div>

    // the JSX is transpilated to this:
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  );
  */

  /*
  // Stateless Component
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Ulder" age="38" />
      <Person name="Mônica" age="32">My hobbies: Racing</Person>
      <Person name="Graziele" age="36" />
    </div>
  );
  */

  /*
  return (
    <Stateful />
  );
  */

  return (
    <FunctionComponent />
  )
}

export default App;
