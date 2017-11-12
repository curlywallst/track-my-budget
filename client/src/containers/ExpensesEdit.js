import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class ExpensesEdit extends Component {
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
    const annualAmount = this.state.monthlyAmount !== ""? this.state.monthlyAmount * 12 : null
    const expenseAttributes = {id: this.state.id}
    if (this.state.name !== "") {expenseAttributes['name'] = this.state.name}
    if (this.state.category !== "") {expenseAttributes['category'] = this.state.category}
    if (this.state.monthlyAmount !== "") {expenseAttributes['monthlyAmount'] = this.state.monthlyAmount}
    expenseAttributes['annualAmount'] = annualAmount

    this.props.actions.editExpenses(expenseAttributes)
    this.setState({
      name: '',
      category: '',
      monthlyAmount: '',
      annualAmount: '',
      id: '',
    })
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleOnSubmit.bind(this)} >
          <input className="App-form"
            name="id"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Expense Id"
            value={this.state.id}/>

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
          <br></br>
          <input className="App-form" style={{background: '#86B404'}} type="submit" value="Edit Expense" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(ExpensesEdit);
