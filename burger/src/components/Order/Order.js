import React from 'react';
import classes from './Order.module.css';
const order = (props) => {
    const ingredients = [];
    for (let i in props.ingredients) {
        ingredients.push(<span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '6px',
               
            }}
            key={i}>{i} ({props.ingredients[i]})</span>);
    }
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        </div>
    );
}

export default order;

