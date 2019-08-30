import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index'

const Orders = React.lazy(() => import('./containers/Orders/Orders'))
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'))
const Auth = React.lazy(() => import('./containers/Auth/Auth'))
const Logout = React.lazy(() => import('./containers/Auth/Logout/Logout'))
const WaitingComponent = (Component) => {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  )
}

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()

  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={WaitingComponent(Auth)} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>

    )

    if (this.props.isAuth) {
      routes = <Switch>
        <Route path="/checkout" component={WaitingComponent(Checkout)} />
        <Route path="/orders" component={WaitingComponent(Orders)} />
        <Route path="/logout" component={WaitingComponent(Logout)} />
        <Route path="/auth" component={WaitingComponent(Auth)} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    }

    return (
      <>
        <div>
          <Layout>
            {routes}
          </Layout>
        </div>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
