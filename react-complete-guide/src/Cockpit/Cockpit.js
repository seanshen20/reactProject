import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../context/auth-context';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  let toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
    console.log("cleanup");
    return () => {
      console.log("cleanup2");
    };
  }, []);

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is real good</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.click}>Toggle Persons</button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>  
    </div>
  );
}

export default React.memo(cockpit);

