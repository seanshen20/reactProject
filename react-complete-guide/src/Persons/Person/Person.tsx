import React, { useContext } from 'react';
import classes from './Person.module.css';
import WithClass from '../../hoc/WithClass';
import AuthContext from '../../context/auth-context';
export interface IProps {
    name: string,
    age: number,
    children?: any,
    changed: any,
    click: any,
    isAuth: any
}
// either wrap by aux or fragement or withclass or WithClass
const person = (props: IProps) => {
    const authContext: any = useContext(AuthContext);

    return (
        <WithClass classes={classes.Person}>
            {authContext.authenticated
            ? <p>Authenticated!</p> : <p>Please log in</p>}
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </WithClass>
    );
}

export default person;