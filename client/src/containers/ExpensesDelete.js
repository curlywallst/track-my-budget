import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class ExpensesDelete extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

   handleOnSubmit = (event) => {
     event.preventDefault();
     let id = parseInt(this.state.id, 10)
     this.props.actions.deleteExpenses(id)
     this.setState({id: ""})
   }

  render() {
    return (
      <div>
        <br></br>
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

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(ExpensesDelete);
