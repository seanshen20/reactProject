import React, { Component } from 'react'
import pizzaImage from '../components/PizzaImage/PizzaImage';


class Pizza extends Component {
    render () {

        return (
            <div>
                <h1>The Pizza</h1>
                <pizzaImage />
            </div>
        )
    }
}

export default Pizza