import { combineReducers } from 'redux';
import expensesReducer from './expenses';
import incomeReducer from './income'

export default combineReducers({
  expensesReducer, 
  incomeReducer
});
