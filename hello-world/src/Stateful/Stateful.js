import React, { Component } from 'react';
import Person from '../Person/Person';

class Stateful extends Component {
    state = {
        persons: [
            { name: "Ulder", age: 38 },
            { name: "Mônica", age: 32 },
            { name: "Graziele", age: 36 }
        ]
    };

    render() {
        return (
            <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
        );
    }
}

export default Stateful;