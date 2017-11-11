import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class IncomeEdit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      earnedIncome: this.props.earnedIncome,
      netInvestedAssets: this.props.netInvestedAssets,
      taxRate: this.props.taxRate,
      roi: this.props.roi,
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const incomeAttributes = {
      earnedIncome: this.state.earnedIncome,
      netInvestedAssets: this.state.netInvestedAssets,
      taxRate: this.state.taxRate,
      roi: this.state.roi,
    }
    this.props.actions.editIncome(incomeAttributes);
  }

  render() {
    const incomeFields = this.props.income
    console.log(incomeFields)
    if (incomeFields !== undefined) {
    return (
      <div>
        <form  onSubmit={this.handleOnSubmit.bind(this)} >
          <input className="App-form"
            name="earnedIncome"
            type="text"
            onChange={this.handleOnChange}
            placeholder={incomeFields.earnedIncome}
            value={this.state.earnedIncome}/>

          <input className="App-form"
            name="netInvestedAssets"
            type="text"
            onChange={this.handleOnChange}
            placeholder={incomeFields.netInvestedAssets}
            value={this.state.netInvestedAssets}/>

          <input className="App-form"
            name="taxRate"
            type="text"
            onChange={this.handleOnChange}
            placeholder={incomeFields.taxRate}
            value={this.state.taxRate}/>

            <input className="App-form"
              name="roi"
              type="text"
              onChange={this.handleOnChange}
              placeholder={incomeFields.roi}
              value={this.state.roi}/>

          <input className="App-form" style={{background: '#86B404'}} type="submit" value="Edit Income" />
        </form>
      </div>
    );
  } else {return null}}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(IncomeEdit);
