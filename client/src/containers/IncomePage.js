import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'
import IncomeEdit from './IncomeEdit';
import IncomeList from '../components/IncomeList'

class IncomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: this.props.income
    }

  }

  componentDidMount() {
      console.log('in income component did mount')
      this.props.actions.fetchIncome()
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Switch>
          <Route path={match.url} render={() => (
            <div>
              <br></br>
              <IncomeEdit income={this.props.income[0]} />
              <h2>Income</h2>
              <br></br>
              <IncomeList income={this.props.income}/>
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
