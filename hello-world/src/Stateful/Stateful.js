import React, { Component } from 'react';
import Person from '../Person/Person';

class Stateful extends Component {
    state = {
        persons: [
            { name: "Ulder", age: 38 },
            { name: "Mônica", age: 32 },
            { name: "Graziele", age: 36 }
        ],
        otherState: "some other value"
    };

    // by convention, use suffix 'Handler' for methods who are called by events
    switchNameHandler = () => {
        // console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0].name = "Ulder Carrilho Júnior";
        this.setState(
            {
                persons: [
                    { name: "Ulder Carrilho Júnior", age: 38 },
                    { name: "Mônica", age: 32 },
                    { name: "Graziele", age: 36 }
                ]
            }
        );
    }

    render() {
        return (
            <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            { /* in HTML events are always lowercase like 'onclick', but in JSX use like 'onClick' */ }
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
        );
    }
}

export default Stateful;