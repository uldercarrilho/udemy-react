import React from 'react';
import './Person.css'
import Radium from 'radium';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    const rnd = Math.random();

    // https://reactjs.org/docs/error-boundaries.html
    // UNCOMMENT this code to simulate error catched by ErrorBoundary
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className="Person" style={style}>
            {/* <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p> */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person);