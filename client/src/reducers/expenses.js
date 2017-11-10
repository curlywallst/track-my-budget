export default function expenseReducer(state = [], action){
  switch (action.type) {

    case 'ADD_EXPENSES':
      return [ ...state, action.expense ];

    case 'SUCCESSFULLY_CREATED_EXPENSE':
      return [...state.slice(0, state.length), action.payload]

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

//
// case 'INCREASE_COUNT':
//   console.log("Current state.items length %s", state.items.length);
//   console.log("Updating state.items length to %s", state.items.length + 1);
//   return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });

// export const removeQuote = (quoteId) => {
//   return {
//     type: 'REMOVE_QUOTE',
//     quoteId
//   };
// };

// case 'REMOVE_QUOTE':
//   return state.filter((q) => q.id !== action.quoteId);
//
// case 'UPVOTE_QUOTE':
//   idx = state.findIndex(q => q.id === action.quoteId )
//   quote = state[idx]
//   quote.votes++
//   return [...state.slice(0, idx), quote, ...state.slice(idx+1)]
