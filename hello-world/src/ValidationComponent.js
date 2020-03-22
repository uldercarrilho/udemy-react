import React from 'react';

const ValidationComponent = (props) => {
    const MINIMUM_LENGTH = 5;
    let message;
    message = (props.textLength < MINIMUM_LENGTH) ? 'Text too short' : 'Text long enough';

    return (<p>{message}</p>);
};

export default ValidationComponent;