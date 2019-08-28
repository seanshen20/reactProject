import React, { Component } from 'react';
import { connect } from 'react-redux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,  
    }

    componentDidMount() {
        console.log('burger builder mount')
        this.props.onInitIngredients()
        this.props.purchaseInit()
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //     })
        //     .catch(error=>{
        //         this.setState({initialDataError: true})
        //     });
            
    }


    updatePurchaseState(ingredients) {
        // old state new state issue 
        //const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
        const find = Object.entries(ingredients).find(ele => ele[1] > 0)
        return find;
    }

    // method or function 
    purchaseHandler() {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    // price should be calculate in server
    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disableButton = { ...this.props.ings };
        Object.keys(disableButton).forEach((key) => {
            disableButton[key] = disableButton[key] <= 0
        });

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        if (this.props.ings) {
            burger =
                <>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientsAdded={this.props.onIngredientAdded}
                        ingredientsDeducted={this.props.onIngredientRemoved}
                        disableButton={disableButton}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        price={this.props.price}
                        ordered={this.purchaseHandler.bind(this)}></BuildControls>
                </>;

            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />;
        }

        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        );
    }
};
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        purchaseInit: state.order.purchaseInit
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        purchaseInit: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
