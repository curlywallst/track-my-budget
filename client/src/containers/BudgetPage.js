import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpensesList from '../components/ExpensesList';
import IncomeList from '../components/IncomeList';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class BudgetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      income: []
    }
  }

  componentDidMount() {
      console.log('in budget component did mount')
      this.props.actions.fetchExpenses()
      // this.props.action.fetchIncome()
  }

  render() {
    const { match, expenses, income } = this.props

    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <div>
              <h2>Expenses</h2>
              <ExpensesList expenses={expenses} />
              <h2>Income</h2>
              <IncomeList income={income}/>
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
    expenses: state.expenses,
    income: state.income
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPage);
