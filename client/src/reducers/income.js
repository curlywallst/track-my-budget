export default function incomeReducer(state = [], action){
  switch (action.type) {

    case 'ADD_INCOME':
      return [ ...state, action.income ];

      case 'SUCCESSFULLY_CREATED_INCOME':
        return [...state.slice(0, state.length), action.payload]

      case 'LOADING_INCOME':
        return state

      case 'STOP_LOADING_INCOME':
        return action.income

    default:
      return state;
  }
};
