import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.click}>Username: {props.name} </p>
            <p>Password: {props.password}</p>
        </div>
    );
}

export default userOutput;