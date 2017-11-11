import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import { bindActionCreators } from 'redux'

class IncomeEdit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      earnedIncome: '',
      netInvestedAssets: '',
      taxRate: '',
      roi: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();

    const incomeAttributes = {id: 1}
    this.state.earnedIncome !== ""? incomeAttributes['earnedIncome'] = this.state.earnedIncome : null
    this.state.netInvestedAssets !== ""? incomeAttributes['netInvestedAssets'] = this.state.netInvestedAssets : null
    this.state.taxRate !== ""? incomeAttributes['taxRate'] = this.state.taxRate : null
    this.state.roi !== ""? incomeAttributes['roi'] = this.state.roi : null

    this.props.actions.editIncome(incomeAttributes);
    this.setState = {
      earnedIncome: '',
      netInvestedAssets: '',
      taxRate: '',
      roi: '',
    };
  }

  render() {
    const incomeFields = this.props.income
    if (incomeFields !== undefined) {
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
            placeholder="Net Investment Assets"
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
              placeholder="Return On Investment"
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
