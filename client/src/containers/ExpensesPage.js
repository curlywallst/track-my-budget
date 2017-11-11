import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpensesList from '../components/ExpensesList';
import ExpensesNew from './ExpensesNew';
import ExpensesEdit from './ExpensesEdit';
import ExpensesDelete from './ExpensesDelete'
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
      console.log('in expenses component did mount')
      this.props.actions.fetchExpenses()
  }

  render() {
    const { match } = this.props

    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <div>
              <br></br>
              <label><strong>To Add Expense: </strong>Complete all fields then click Add Expense button:
              <ExpensesNew /></label>
              <br></br>
              <label><h2 style={{"display": "inline"}}>Expenses</h2>:   Click on any column heading to sort by that column. Second click reverses sort order.</label>
              <p style={{"display": "block"}}></p>
              <ExpensesList expenses={this.props.expenses} />
              <br></br>
              <label><strong>To Edit: </strong>Enter Expense Id any and complete any field you wish to change then click Edit Expense button:
              <ExpensesEdit /></label>
              <br></br>
              <label><strong>To Delete: </strong>Enter Expense Id then click Delete Expense button:
              <ExpensesDelete /></label>
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
