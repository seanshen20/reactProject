import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Users from './container/Users'

const Pizza = React.lazy(() => import('./container/Pizza'))
const waitingComponent = (Component) => {
    return props => (
        <Suspense fallback={}>
            <Component {...props} />
        </Suspense>)
}

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={waitingComponent(Pizza)} />

                </div>
            </div>
        )
    }
}

export default App