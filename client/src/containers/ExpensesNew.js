import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenses } from '../actions';
import uuid from 'uuid';

class ExpensesNew extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      category: '',
      monthlyAmount: '',
      annualAmount: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addExpenses } = this.props;
    const annualAmount = this.state.monthlyAmount * 12
    const expense = Object.assign({}, this.state, { annualAmount: annualAmount, id: uuid()});
    addExpenses(expense);
    this.setState({
      name: '',
      category: '',
      monthlyAmount: '',
      annualAmount: '',
    });
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleOnSubmit.bind(this)} >
          <input className="App-form"
            name="name"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Expense name"
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


export default connect(null, { addExpenses })(ExpensesNew)
