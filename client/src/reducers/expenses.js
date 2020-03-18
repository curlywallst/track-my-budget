export default function expenseReducer(state = {expenses: []}, action){
  switch (action.type) {

    case 'ADD_EXPENSES':
      return {...state}

    case 'SUCCESSFULLY_CREATED_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }


    case 'LOADING_EXPENSES':
      return {
        ...state
      }

    case 'STOP_LOADING_EXPENSES':
      return {...state, 
        expenses: action.payload
      }

    case 'DELETE_EXPENSES':
      return {
        ...state
      }

    case 'SUCCESSFULLY_DELETED_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload )
      }

    case 'EDIT_EXPENSES':
      return {
        ...state
      }

    case 'SUCCESSFULLY_EDITED_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense => {
          return expense.id === action.payload.id ? action.payload : expense})
      }


    default:
      return state;
  }
};
