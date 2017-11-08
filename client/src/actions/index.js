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


// function getUsers(){
//   fetch('users.json')
//   .then((res => res.json())
//   .then((data) => {
//     USE DATA HERE
//   })


// function addPost(e){
//   e.preventDefault();
//   let title=FROM FORM;
//   let body=FROM FORM;
//   fetch('url you post to', {
//     method:'POST',
//     headers: {
//       'Accept': 'appliatioon/json, text/plain, */*',
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify({title:title, body:body})
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//   }


}
