// import fetch from 'isomorphic-fetch';
//
// export function fetchIncome() {
//   return function(dispatch){
//     dispatch({ type: 'LOADING_INCOME' })
//     return fetch('/api/income')
//       .then(response => {return response.json()})
//       .then(responseJson => {dispatch({ type: 'STOP_LOADING_INCOME', income: responseJson })});
//     }
//   };
//
// export function editIncome(income) {
//   return (dispatch) => {
//     dispatch({ type: 'EDIT_INCOME' });
//     return fetch(`/api/income/${income.id}`, {
//       method:'PATCH',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         earnedIncome: income.earnedIncome,
//         netInvestedAssets: income.netInvestedAssets,
//         taxRate: income.taxRate,
//         roi: income.roi,
//         id: income.id
//       })
//     })
//     .then((res) => res.json())
//     .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_EDITED_INCOME', payload: responseJson })
//       return responseJson;
//     })
//   }
// }
