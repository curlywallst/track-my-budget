import fetch from 'isomorphic-fetch';

// export function addExpenses(expense) {
//   return {
//     type: 'ADD_EXPENSE',
//     expense
//   };
// };

export function fetchExpenses() {
  return function(dispatch){
    dispatch({ type: 'LOADING_EXPENSES' })
    return fetch('/api/expenses')
      .then(response => {return response.json()})
      .then(responseJson => {dispatch({ type: 'STOP_LOADING_EXPENSES', expenses: responseJson })});
    }
  };

  export function addExpenses(expense) {
    return (dispatch) => {
      dispatch({ type: 'ADD_EXPENSES' });
      return fetch('/api/expenses', {
        method:'POST',
        body: JSON.stringify({
          name:expense.name,
          category: expense.category,
          id:expense.id,
          monthlyAmount: expense.monthlyAmount,
          annualAmount: expense.annualAmount
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_CREATED_EXPENSE', payload: responseJson.expense })
        return responseJson;
      })
    }
  }

//   export function createRoutine(routine, history) {
//   const routineAttributes = processRoutineForApi(routine);
//
//   return(dispatch) => {
//     const options = requestOptions({
//       method: 'POST',
//       body: JSON.stringify({
//         routine: routineAttributes,
//       }),
//     });
//
//     dispatch({ type: 'CREATING_ROUTINE' });
//
//     return fetch('/api/v1/routines', options)
//       .then(handleErrors)
//       .then(response => response.json())
//       .then(routines => {
//         dispatch({
//           type: 'SUCCESSFULLY_CREATED_ROUTINE',
//           payload: routines.routine,
//         })
//         return routines;
//       })
//       .then(routines => history.push(`/routines/${routines.routine.id}`))
//       .catch((error) => {
//         dispatch({
//           type: 'UNSUCCESSFULLY_CREATED_ROUTINE',
//           payload: "Your routine could not be created!",
//         })
//       });
//   }
// }


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
//       'Accept': 'application/json, text/plain, */*',
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify({title:title, body:body})
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//   }
