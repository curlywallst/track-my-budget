import React, { Component } from 'react';
import { connect } from 'react-redux';
import{addExpenses} from '../actions/index.js'

class ExpensesNew extends Component {

  state = {
    name: '',
    category: '',
    monthlyAmount: '',
    annualAmount: '',
    id: '',
  };

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
    this.props.addExpenses(expenseAttributes);
    this.setState({
      name: '',
      category: '',
      monthlyAmount: '',
      annualAmount: '',
    })
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleOnSubmit} >
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

export default connect(null, {addExpenses})(ExpensesNew);
