import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchIncome} from '../actions/index.js'
import IncomeEdit from './IncomeEdit';
import IncomeList from '../components/IncomeList'

class IncomePage extends Component {
  state = {
    income: this.props.income
  }


  componentDidMount() {
      console.log('in income component did mount')
      this.props.fetchIncome()
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Switch>
          <Route path={match.url} render={() => (
            <div>
              <br></br>
              <label><span><strong>To Edit: </strong>Complete any field you wish to change then click Edit Income button:</span>
              <p></p>
              <IncomeEdit income={this.props.income[0]} /></label>
              <br></br>
              <br></br>
              <h2>Income</h2>
              <IncomeList income={this.props.income}/>
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    income: state.incomeReducer.income
  };
}

export default connect(mapStateToProps, {fetchIncome})(IncomePage);
