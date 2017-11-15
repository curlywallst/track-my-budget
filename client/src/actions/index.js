import fetch from 'isomorphic-fetch';

export function fetchExpenses() {
  return function(dispatch){
    dispatch({ type: 'LOADING_EXPENSES' })
    return fetch('/api/expenses')
      .then(response => {return response.json()})
      .then(responseJson => {dispatch({ type: 'STOP_LOADING_EXPENSES', payload: responseJson })});
    }
  };

  export function addExpenses(expense) {
    return (dispatch) => {
      dispatch({ type: 'ADD_EXPENSES' });
      return fetch('/api/expenses', {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:expense.id,
          name:expense.name,
          category: expense.category,
          monthlyAmount: expense.monthlyAmount,
          annualAmount: expense.annualAmount
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_CREATED_EXPENSE', payload: responseJson })
        return responseJson;
      })
    }
  }

  export function editExpenses(expense) {
    return (dispatch) => {
      dispatch({ type: 'EDIT_EXPENSES' });
      return fetch(`/api/expenses/${expense.id}`, {
        method:'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: expense.id,
          name: expense.name,
          category: expense.category,
          monthlyAmount: expense.monthlyAmount,
          annualAmount: expense.annualAmount
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_EDITED_EXPENSE', payload: responseJson })
      return responseJson;
      })
    }
  }

  export function deleteExpenses(id) {
    return (dispatch) => {
      dispatch({ type: 'DELETE_EXPENSES' });
      return fetch(`/api/expenses/${id}`, {
        method:'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_DELETED_EXPENSE', payload: responseJson})
        return responseJson;
      })
    }
  }

  export function fetchIncome() {
    return function(dispatch){
      dispatch({ type: 'LOADING_INCOME' })
      return fetch('/api/income')
        .then(response => {return response.json()})
        .then(responseJson => {dispatch({ type: 'STOP_LOADING_INCOME', income: responseJson })});
      }
    };

  export function editIncome(income) {
    return (dispatch) => {
      dispatch({ type: 'EDIT_INCOME' });
      return fetch(`/api/income/${income.id}`, {
        method:'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          earnedIncome: income.earnedIncome,
          netInvestedAssets: income.netInvestedAssets,
          taxRate: income.taxRate,
          roi: income.roi,
          id: income.id
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_EDITED_INCOME', payload: responseJson })
        return responseJson;
      })
    }
  }

  // import fetch from 'isomorphic-fetch';
  //
  // import * as expensesActions from './expensesActions';
  // import * as incomeActions from './incomeActions';
  // debugger
  // export {
  //   this.expensesActions,
  //   this.incomeActions,
  // };



// function getUsers(){
//   fetch('users.json')
//   .then((res => res.json())
//   .then((data) => {
//     USE DATA HERE
//   })
