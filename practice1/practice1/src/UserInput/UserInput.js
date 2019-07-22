import React from 'react'

const userInput = (props) => {
    const style = {
        border: '2px solid red'
    }
    return (
        <div>
            <input type="text" style={style} onChange={props.passwordChange} value={props.password}/> user Input:
        </div>
    );
}

export default userInput;