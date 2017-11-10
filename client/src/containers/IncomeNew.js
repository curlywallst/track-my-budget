import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class IncomeNew extends Component {
  constructor (props) {
    super(props);

    this.state = {
      earnedIncome: '',
      netInvestedAssets: '',
      taxRate: '',
      roi: '',
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
    // const annualAmount = this.state.monthlyAmount * 12;
    const incomeAttributes = {
      earnedIncome: this.state.earnedIncome,
      netInvestedAssets: this.state.netInvestedAssets,
      taxRate: this.state.taxRate,
      roi: this.state.roi,
    }
    this.props.actions.addIncome(incomeAttributes);
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleOnSubmit.bind(this)} >
          <input className="App-form"
            name="earnedIncome"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Earned Income"
            value={this.state.earnedIncome}/>

          <input className="App-form"
            name="netInvestedAssets"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Net Invested Assets"
            value={this.state.netInvestedAssets}/>

          <input className="App-form"
            name="taxRate"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Tax Rate"
            value={this.state.taxRate}/>

            <input className="App-form"
              name="roi"
              type="text"
              onChange={this.handleOnChange}
              placeholder="Assumed Return On Investment"
              value={this.state.roi}/>

          <input className="App-form" style={{background: '#86B404'}} type="submit" value="Enter Income" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(IncomeNew);
