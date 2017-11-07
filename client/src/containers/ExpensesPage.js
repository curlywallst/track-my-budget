import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpensesList from '../components/ExpensesList';
import ExpensesNew from './ExpensesNew';
import { fetchExpenses } from '../actions';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class ExpensesPage extends Component {
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
          <Route exact path={match.url} render={() => (
            <div>
              <br></br>
              <ExpensesNew />
              <h2>Expenses</h2>
              <ExpensesList expenses={this.props.expenses} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
