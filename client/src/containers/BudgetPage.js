import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpensesList from '../components/ExpensesList';
import { fetchExpenses } from '../actions';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class BudgetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: []
    }
  }

  componentDidMount() {
      console.log('in component did mount')
      this.props.actions.fetchExpenses()
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

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPage);
