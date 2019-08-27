import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
class Counter extends Component {
    state = {
        counter: 0
    }

    componentDidUpdate() {
        console.log(this.props);
    }
    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default: break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <CounterControl label="Increment" clicked={this.props.onIncrement} />
                    <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                    <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
                    <CounterControl label="Subtract 5" clicked={this.props.onSubtract.bind(this, 5)} />
                </div>

                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.results.map((ele) =>
                        <li key={ele.id} onClick={() => this.props.onDeleteResult(ele.id)}>{ele.value}</li>
                    )}


                </ul>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(actionCreators.increment()),
        onDecrement: () => dispatch(actionCreators.decrement() ),
        onAdd: (value) => dispatch(actionCreators.add(value)),
        onSubtract: (value) => dispatch(actionCreators.subtract(value)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (deleteId) => dispatch(actionCreators.deleteResult(deleteId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);