import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredients/Ingredients';
export default (props) => {
    // [...array, cur] still has empty object | array.concat(cur)
    // reduce [] to nothing 
    let transformedIngrgredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, index) => 
                <Ingredient key={igkey + index} type={igkey}/>)
        })
        .reduce((array, cur) => {
            return array.concat(cur);            
        }, []);

    if (transformedIngrgredients.length === 0) {
        transformedIngrgredients = <p>Please start adding ingredients!</p>
    }
    // let array = [];
    // for (var key in props.ingredients) {
    //     for (let i = 0; i < props.ingredients[key]; i++) {
    //         array.push(<Ingredient key={key + i} type={key}/>)
    //     }
    // }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngrgredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
}

