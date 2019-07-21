import React from 'react'

const userOutput = (props) => {
    return (
        <div>
            <p onClick={props.click}>Username: {props.name} </p>
            <p>Password: {props.password}</p>
        </div>
    );
}

export default userOutput;