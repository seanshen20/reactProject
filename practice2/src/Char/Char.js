import React from 'react'

export default (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "1px solid black",
        textAlign: "center"
    } 
    return(
        <div style={style} onClick={props.delete}>{props.char}</div>
    );
};
