import React from 'react'
import classes from './Menu.module.css'
import {NavLink} from 'react-router-dom'
const menu = () => {
  return (
    <header className={classes.Menu}>
      <nav>
        <ul>
          <li><NavLink activeClassName={classes.active} to="/users">Users</NavLink></li>
          <li><NavLink activeClassName={classes.active} to="/courses">Courses</NavLink></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default menu
