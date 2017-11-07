export default function manageIncome(state = [], action){
  switch (action.type) {

    case 'ADD_INCOME':
      return [ ...state, action.income ];

    default:
      return state;
  }
};
