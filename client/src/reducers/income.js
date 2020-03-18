export default function incomeReducer(state = {income: []}, action){
  switch (action.type) {

    case 'LOADING_INCOME':
      return {
        ...state
      }

    case 'STOP_LOADING_INCOME':
      return {
        ...state,
        income: action.income
      }

    case 'EDIT_INCOME':
      return {
        ...state
      }

    case 'SUCCESSFULLY_EDITED_INCOME':
      return {
        ...state,
        income: action.payload 
      }


    default:
      return state;
  }
};
