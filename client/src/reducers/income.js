export default function incomeReducer(state = [], action){
  switch (action.type) {

    case 'LOADING_INCOME':
      return state

    case 'STOP_LOADING_INCOME':
      return action.income

    case 'EDIT_INCOME':
      return state;

    case 'SUCCESSFULLY_EDITED_INCOME':
      return action.payload


    default:
      return state;
  }
};
