import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteExpenses} from '../actions/index.js'

class ExpensesDelete extends Component {

    state = {
      id: '',
    };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

   handleOnSubmit = (event) => {
     event.preventDefault();
     let id = parseInt(this.state.id, 10)
     this.props.deleteExpenses(id)
     this.setState({id: ""})
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
          <br></br>
          <input className="App-form" style={{background: '#86B404'}} type="submit" value="Delete Expense" />
        </form>
      </div>
    );
  }
}

export default connect(null, {deleteExpenses})(ExpensesDelete);
