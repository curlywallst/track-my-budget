import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpensesList from '../components/ExpensesList';

class BudgetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: []
    }
  }

  render() {
    const { match, expenses } = this.props

    return (
      <div>
        <Switch>
          {/* <Route path={`${match.url}/:expenseId`} component={ExpensesShow}/> */}
          {/* <Route path={`${match.url}/:incomeId`} component={IncomeShow}/> */}
          <Route exact path={match.url} render={() => (
            <div>
              <h2>Expenses</h2>
              <ExpensesList expenses={expenses} />
              <p>Please Click Expenses to go to Expense Page</p>
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
}

export default connect(mapStateToProps, null)(BudgetPage);
