export default function expenseReducer(state = [], action){
  switch (action.type) {

    case 'ADD_EXPENSES':
      return [ ...state, action.expense ];

    case 'SUCCESSFULLY_CREATED_EXPENSE':
      return state.concat(action.payload)
      //[...state.slice(0, state.length), action.payload]

    case 'LOADING_EXPENSES':
      return state

    case 'STOP_LOADING_EXPENSES':
      return action.payload

    case 'DELETE_EXPENSES':
      return state

    case 'SUCCESSFULLY_DELETED_EXPENSE':
      return action.payload

    case 'EDIT_EXPENSES':
      return state

    case 'SUCCESSFULLY_EDITED_EXPENSE':
      return action.payload;


    default:
      return state;
  }
};
