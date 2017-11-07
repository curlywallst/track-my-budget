import fetch from 'isomorphic-fetch';

export function addExpenses(expense) {
  return {
    type: 'ADD_EXPENSE',
    expense
  };
};

export function fetchExpenses() {
  return function(dispatch){
    dispatch({ type: 'LOADING_EXPENSES' })
    return fetch('/api/expenses')
      .then(response => {return response.json()})
      .then(responseJson => {dispatch({ type: 'FETCH_EXPENSES', expenses: responseJson })});
  };
}
