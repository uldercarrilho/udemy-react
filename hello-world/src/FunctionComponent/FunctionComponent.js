import React, { useState } from 'react';
import Person from '../Person/Person';

const FunctionComponent = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Ulder', age: 38 },
            { name: 'Mônica', age: 32 },
            { name: 'Graziele', age: 36 }
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
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