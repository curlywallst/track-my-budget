import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="App-nav">
      <NavLink className="App-nav-link"
        activeStyle={{ color: '#86B404' }}
        to="/about"
        >
          About
        </NavLink>

      <NavLink className="App-nav-link"
        exact
        activeStyle={{ color: '#86B404' }}
        to="/budget"
      >
        My Budget
      </NavLink>

      <NavLink className="App-nav-link"
        activeStyle={{ color: '#86B404' }}
        to="/budget/expenses"
      >
        Expenses
      </NavLink>

      <NavLink className="App-nav-link"
        activeStyle={{ color: '#86B404' }}
        to="/budget/income"
      >
        Income
      </NavLink>

      <NavLink className="App-nav-link"
        activeStyle={{ color: '#86B404' }}
        to="/budget/edit"
      >
        Settings
      </NavLink>

    </div>
  );
}

export default NavBar;
