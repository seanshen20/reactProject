import React from 'react';
import classes from './Person.module.css';
import WithClass from '../../hoc/WithClass';
export interface IProps {
    name: string,
    age: number,
    children?: any,
    changed: any,
    click: any
}
// either wrap by aux or fragement or withclass or WithClass
const person = (props: IProps) => {
    return (
        <WithClass classes={classes.Person}>
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </WithClass>
    );
}

export default person;