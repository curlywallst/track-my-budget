import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class ExpensesNew extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      category: '',
      monthlyAmount: '',
      annualAmount: '',
      id: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const annualAmount = this.state.monthlyAmount * 12;
    const expenseAttributes = {
      name: this.state.name,
      category: this.state.category,
      monthlyAmount: this.state.monthlyAmount,
      annualAmount: annualAmount,
    }
    this.props.actions.addExpenses(expenseAttributes);
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleOnSubmit.bind(this)} >
          <input className="App-form"
            name="name"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Expense Name"
            value={this.state.name}/>

          <input className="App-form"
            name="category"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Category"
            value={this.state.category}/>

          <input className="App-form"
            name="monthlyAmount"
            type="number"
            onChange={this.handleOnChange}
            placeholder="Monthly Amount"
            value={this.state.monthlyAmount}/>

          <input className="App-form" style={{background: '#86B404'}} type="submit" value="Add Expense" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(ExpensesNew);
