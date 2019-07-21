import React from 'react'

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.passwordChange} value={props.password}/> user Input:
        </div>
    );
}

export default userInput;