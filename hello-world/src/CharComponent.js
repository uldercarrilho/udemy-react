import React from 'react';

const CharComponent = (props) => {

    const inlineStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <p style={inlineStyle} onClick={props.click}>{props.letter}</p>
    );
};

export default CharComponent;