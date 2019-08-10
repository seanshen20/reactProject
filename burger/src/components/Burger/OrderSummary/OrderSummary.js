import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

export default (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map((key) => <li key={key}>
            <span style={{ textTransform: 'capitalize' }}>
            {key} : {props.ingredients[key]}
            </span></li>);
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Check Out</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    );

};




