import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import IncomeNew from './IncomeNew';
import IncomeList from '../components/IncomeList'

class IncomePage extends Component {

  componentDidMount() {
      console.log('in income component did mount')
      this.props.actions.fetchIncome()
  }

  render() {
    const { match } = this.props
    console.log('in income component did mount')

    return (
      <div>
        <Switch>
          {/* <Route path={`${match.url}/:expenseId`} component={ExpensesShow}/> */}
          <Route path={match.url} render={() => (
            <div>
              <br></br>
              <IncomeNew />
              <h2>Income</h2>
              <br></br>
              <IncomeList income={this.props.income}/>
              <Link to={`/income/edit`} >Edit Income</Link>
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
    income: state.income
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomePage);
