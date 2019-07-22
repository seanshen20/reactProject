import React from 'react'

const validation = (props) => {
    let message = (
        <div>
            {props.len > 5 ? <p>Length is long enough</p>: <p>word is too short</p> }
        </div>
    );
    return (
        <div>
            {message}
        </div>
    )
};

export default validation;