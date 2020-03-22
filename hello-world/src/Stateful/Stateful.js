import React, { Component } from 'react';
import Person from '../Person/Person';
import ValidationComponent from '../ValidationComponent';
import CharComponent from '../CharComponent';

class Stateful extends Component {
    state = {
        persons: [
            { id: 1, name: "Ulder", age: 38 },
            { id: 2, name: "Mônica", age: 32 },
            { id: 3, name: "Graziele", age: 36 }
        ],
        otherState: "some other value",
        showPersons: false,
        text: '',
        textLength: 0
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

    // the parameter 'event' is passed automatic by React
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const person = {
            ...this.state.persons[personIndex]
        }
        // alternative way to create a new copy of object
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const newPersons = [...this.state.persons];
        newPersons[personIndex] = person;
        this.setState( {persons: newPersons} );
    }

    deletePersonsHandler = (personIndex) => {
        // const persons = this.state.persons.slice(); // create a copy of array
        const persons = [...this.state.persons]; // copy array using spread operator
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    inputTextOnChangeHandler = (event) => {
        this.setState({text: event.target.value});
        this.setState({textLength: event.target.value.length});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    removeCharComponent = (index) => {
        let copyText = this.state.text.split('');
        copyText.splice(index, 1);
        this.setState({text: copyText.join('')});
    };

    renderCharComponents = () => {
        let arrayCharComponent = new Array(0);

        for (let i = 0; i < this.state.text.length; i++) {
            const element = this.state.text[i];
            const charComponent = <CharComponent key={i} letter={element} click={() => this.removeCharComponent(i)} />
            arrayCharComponent.push(charComponent);
        }

        return (
            <div>
                {arrayCharComponent}
            </div>
        );
    };

    render() {
        // inline style
        // this is recommend only if style is applied only this single element and not shared around the app
        const styleButton = {
            // the properties can't use '-' in the name because JS syntax, instead the name is camelCase
            // restrict the full power of .css files
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        // SIMPLE IMPLEMENTATION
        // 
        // let persons = null;
        // if (this.state.showPersons) {
        //     persons = (
        //     <div>
        //         <Person 
        //         name={this.state.persons[0].name} 
        //         age={this.state.persons[0].age} 
        //         />
        //         <Person 
        //             name={this.state.persons[1].name} 
        //             age={this.state.persons[1].age}
        //             click={this.switchNameHandler.bind(this, 'Júnior')
        //             /* click={this.switchNameHandler} // don't pass a method reference to change de state
        //             click={() => this.switchNameHandler('Juninho')} // React can't render certain things
        //             */}
        //             changed={this.nameChangedHandler}
        //         >My hobbies: Racing</Person>
        //         <Person 
        //             name={this.state.persons[2].name} 
        //             age={this.state.persons[2].age} 
        //         />
        //     </div>
        //     );
        // }

        // 56. USING OUTPUTTING LISTS
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            click={() => this.deletePersonsHandler(index)}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            key={person.id} 
                            name={person.name} 
                            age={person.age} />
                    })}
                </div>
            );

            styleButton.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        
        return (
          <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>

            <input type='text' onChange={(event) => this.inputTextOnChangeHandler(event)} />
            <p>Text length is {this.state.textLength}</p>
            <ValidationComponent textLength={this.state.textLength} />
            {this.renderCharComponents()}

            { /* in HTML events are always lowercase like 'onclick', but in JSX use like 'onClick' */ }
            {/* <button 
                style={styleButton}
                onClick={this.switchNameHandler.bind(this, 'Uder Carrilho Júnior')}>Switch Name</button> */}
            <button style={styleButton} onClick={this.togglePersonsHandler}>Toogle Persons</button>
            {persons}
          </div>
        );
    }
}

export default Stateful;