export default function manageExpenses(state = [], action){
  switch (action.type) {

    case 'ADD_EXPENSE':
      return [ ...state, action.expense ];

    case 'FETCH_EXPENSES':
      return action.expenses

    default:
      return state;
  }
};
