export default function manageExpenses(state = [], action){
  switch (action.type) {

    case 'ADD_EXPENSES':
      return [ ...state, action.expense ];

    case 'SUCCESSFULLY_CREATED_EXPENSE':
      return [ ...state, action.expense ];

    case 'LOADING_EXPENSES':
      return state

    case 'STOP_LOADING_EXPENSES':
      return action.expenses


    default:
      return state;
  }
};
