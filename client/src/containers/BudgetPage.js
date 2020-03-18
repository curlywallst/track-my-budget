import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import IncomeList from '../components/IncomeList';
import ByCategoryList from '../components/ByCategoryList'
import NetBudget from '../components/NetBudget'
import {fetchExpenses, fetchIncome} from '../actions/index'


class BudgetPage extends Component {

  state = {
    expenses: [],
    income: []
  }

  componentDidMount() {
      console.log('in budget component did mount')
      this.props.fetchExpenses()
      this.props.fetchIncome()
  }

  render() {
    const { match, expenses, income } = this.props

    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <div>
              <h2>Expenses</h2>
              <ByCategoryList expenses={expenses} />
              <h2>Income</h2>
              <IncomeList income={income} expenses={expenses}/>
              <h2>Net Monthly Budget</h2>
              <NetBudget income={income} expenses={expenses}/>
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
};



const mapStateToProps = state => {
  return {
    expenses: state.expensesReducer.expenses,
    income: state.incomeReducer.income
  };
}

export default connect(mapStateToProps, {fetchExpenses, fetchIncome})(BudgetPage);
