export default function expenseReducer(state = [], action){
  switch (action.type) {

    case 'ADD_EXPENSES':
      return [ ...state, action.expense ];

    case 'SUCCESSFULLY_CREATED_EXPENSE':
      return [...state.slice(0, state.length), action.payload]

    case 'LOADING_EXPENSES':
      return state

    case 'STOP_LOADING_EXPENSES':
      return action.expenses


    default:
      return state;
  }
};
