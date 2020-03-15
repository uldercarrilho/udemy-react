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
    switchNameHandler = (newName) => {
        // console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0].name = "Ulder Carrilho Júnior";
        // the method 'this.setState' MERGE the object 'state'
        this.setState({
            persons: [
                { name: newName, age: 38 },
                { name: "Mônica", age: 32 },
                { name: "Graziele", age: 36 }
            ]
        });
    }

    render() {
        return (
            <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            { /* in HTML events are always lowercase like 'onclick', but in JSX use like 'onClick' */ }
            <button onClick={this.switchNameHandler.bind(this, 'Uder Carrilho Júnior')}>Switch Name</button>
            <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
            />
            <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Júnior')
                /* click={this.switchNameHandler} // don't pass a method reference to change de state
                   click={() => this.switchNameHandler('Juninho')} // React can't render certain things
                */
                }
            >My hobbies: Racing</Person>
            <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
            />
          </div>
        );
    }
}

export default Stateful;