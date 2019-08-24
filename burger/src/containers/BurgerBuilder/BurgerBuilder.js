import React, { Component } from 'react';
import { connect } from 'react-redux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        initialDataError: false
    }

    componentDidMount() {
        console.log('burger builder mount')
        this.props.onStart()
        console.log(this.props.purchasable)
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
        let burger = this.state.initialDataError ? <p>Ingredients can't be loaded!</p> : <Spinner />;
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

        if (this.state.loading) {
            orderSummary = <Spinner />
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
        ings: state.ingredients,
        price: state.totalPrice,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}),
        onStart: () => dispatch({type: 'start'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
