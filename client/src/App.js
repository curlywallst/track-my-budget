import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'react-table/react-table.css'
import NavBar from './components/NavBar'
import BudgetAbout from './components/BudgetAbout';
import BudgetPage from './containers/BudgetPage';
import ExpensesPage from './containers/ExpensesPage';
import IncomePage from './containers/IncomePage'
import ExpensesNew from './containers/ExpensesNew'
import IncomeNew from './containers/IncomeNew'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">TRACK MY BUDGET</h1>
            <NavBar />
          </header>
          <div className="App-intro">
            <Route className="App-intro" exact path='/' component={BudgetAbout}/>
            <Route className="App-intro" path='/about' component={BudgetAbout}/>
          </div>
          <div className="App-body">
            <Route exact path='/budget' component={BudgetPage}/>
            <Route exact path='budget/income' component={IncomePage}/>
            <Route path='/budget/income/new' component={IncomeNew}/>
            <Route exact path='/budget/expenses' component={ExpensesPage}/>
            <Route path='/budget/expenses/new' component={ExpensesNew}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
