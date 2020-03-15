import React, { useState } from 'react';
import Person from '../Person/Person';

const FunctionComponent = props => {
    // function 'useState' returns an array with two objects:
    // 1º element is the object passed by parameter (current state)
    // 2º element is a function allows to update the state and trigger the update DOM
    // const stateArr = useState({...
    // use the 'array destructuring' to get reference for each object into the array
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Ulder', age: 38 },
            { name: 'Mônica', age: 32 },
            { name: 'Graziele', age: 36 }
        ]
    });

    // 'useState' can be used many times, differently of Component.state property
    // 'useState' function accepts any kind of parameters, like string, boolean, object, array, ...
    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        // this function replace all object of state, instead of merge like Component.setState method
        setPersonsState({
            persons: [
                { name: 'Ulder Carrilho Júnior', age: 38 },
                { name: 'Mônica', age: 32 },
                { name: 'Graziele', age: 36 }
            ]
        });
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
}

export default FunctionComponent;