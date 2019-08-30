import React, { Fragment, Component } from 'react';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {
    
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map((key) => <li key={key}>
                <span style={{ textTransform: 'capitalize' }}>
                    {key} : {this.props.ingredients[key]}
                </span></li>);

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Check Out</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        )
    }
}




